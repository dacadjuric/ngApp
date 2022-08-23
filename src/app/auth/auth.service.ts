import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserModel } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);

  private expToken: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.httpClient
      .post<AuthResponseData>(
        'https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-FnaItYtW4XTSxS9tH5xwPQeNbyTQ-hE',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
        tap((data) => {
          this.authHandling(
            data.email,
            data.idToken,
            data.localId,
            +data.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<AuthResponseData>(
        'https:identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-FnaItYtW4XTSxS9tH5xwPQeNbyTQ-hE',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.errorHandling));
  }

  private authHandling(
    email: string,
    token: string,
    userId: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(email, token, userId, expDate);

    this.user.next(user);

    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private errorHandling(errRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';

    if (!errRes.error || !errRes.error.error) {
      return throwError(() => errorMessage);
    }

    switch (errRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
    }

    return throwError(() => errorMessage);
  }

  autologin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationdate: string;
    } = JSON.parse(localStorage.getItem('userData') as string);

    if (!userData) {
      return;
    }

    const loadedUser = new UserModel(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationdate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationdate).getTime() -
        new Date(userData._tokenExpirationdate).getTime();

      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');

    if (this.expToken) {
      clearTimeout(this.expToken);
    }
    this.expToken = null;
  }

  autoLogout(expirationDuration: number) {
    this.expToken = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}

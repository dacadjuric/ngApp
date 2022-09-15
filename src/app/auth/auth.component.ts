import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperDirective } from '../shared/helper/helper.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../../styles.scss']
})
export class AuthComponent implements OnDestroy{
  isLogin = true;
  isLoading = false;

  error: string = null;

  @ViewChild(HelperDirective, {static: false}) errorHost : HelperDirective;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    
    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLogin) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe({
      next: (v) => {
        this.isLoading = false;
        this.router.navigate(['/sneakers']);
        console.log(v);
      },
      error: (e) => {
        this.isLoading = false;
        console.log('errmsg ' + e.errorMessage);
        this.error = e;
        console.log(e);
      },
    });
    
    form.reset();
  }

  ngOnDestroy(){
    
  }

  onError() {
    this.error = null;
  }
}

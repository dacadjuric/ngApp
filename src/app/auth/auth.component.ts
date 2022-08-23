import { Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ErrorBoxComponent } from '../shared/error-box/error-box.component';
import { HelperDirective } from '../shared/helper/helper.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy{
  isLogin = true;
  isLoading = false;

  error: string = null;

//   private closeSubscription : Subscription;

  @ViewChild(HelperDirective, {static: false}) errorHost : HelperDirective;

  constructor(private authService: AuthService, private router: Router, private viewContainerRef: ViewContainerRef) {}

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
            // this.showErrBox(e.errorMessage);
          console.log(e);
        },
      });
    }
    form.reset();
  }

  ngOnDestroy(){
//       if(this.closeSubscription){
//         this.closeSubscription.unsubscribe();
//       }
  }

  onError() {
    this.error = null;
  }

    // private showErrBox(errMsg: string){
    //     const errorComponent = this.viewContainerRef.createComponent(ErrorBoxComponent);

    //     const hostViewContainerRef = this.errorHost.viewContRef;
    //     hostViewContainerRef.clear();

    //     //ovde treba da se prosledi errorComponent umesto ErrorBoxComponent
    //     const hostComponent = hostViewContainerRef.createComponent(ErrorBoxComponent);

    //     hostComponent.instance.errorMsg = errMsg;

    //     this.closeSubscription = hostComponent.instance.close.subscribe(() => {
    //         this.closeSubscription.unsubscribe();
    //         hostViewContainerRef.clear();
    //     });
    // }
}

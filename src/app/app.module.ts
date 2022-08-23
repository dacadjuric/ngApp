import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SneakersStartComponent } from './sneakers/sneakers-start/sneakers-start.component';
import { SneakersListComponent } from './sneakers/sneakers-list/sneakers-list.component';
import { SneakersEditComponent } from './sneakers/sneakers-edit/sneakers-edit.component';
import { SneakersDetailComponent } from './sneakers/sneakers-detail/sneakers-detail.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartEditComponent } from './shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { SneakersItemComponent } from './sneakers/sneakers-list/sneakers-item/sneakers-item.component';
import { CollectionComponent } from './sneakers/collection/collection.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingCartListService } from './shopping-cart/shopping-cart-list/shopping-cart-list.service';
import { SneakersService } from './sneakers/sneakers.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { ErrorBoxComponent } from './shared/error-box/error-box.component';
import { HelperDirective } from './shared/helper/helper.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    SneakersComponent,
    SneakersStartComponent,
    SneakersListComponent,
    SneakersEditComponent,
    SneakersDetailComponent,
    ContactComponent,
    ShoppingCartComponent,
    ShoppingCartEditComponent,
    SneakersItemComponent,
    CollectionComponent,
    ShoppingCartListComponent,
    DropdownDirective,
    ErrorBoxComponent,
    HelperDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [ShoppingCartListService, SneakersService, DataStorageService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}, AuthGuard],
  bootstrap: [AppComponent],
  // entryComponents: [ErrorBoxComponent]
})
export class AppModule { }

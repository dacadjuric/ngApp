import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionComponent } from './sneakers/collection/collection.component';

import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    ShoppingCartModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

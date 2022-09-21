import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingCartEditComponent } from "./shopping-cart-edit/shopping-cart-edit.component";
import { ShoppingCartListComponent } from "./shopping-cart-list/shopping-cart-list.component";
import { ShoppingCartComponent } from "./shopping-cart.component";

@NgModule({
  declarations: [
    ShoppingCartListComponent,
    ShoppingCartComponent,
    ShoppingCartEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "shopping-cart", component: ShoppingCartComponent },
    ]),
  ],
})
export class ShoppingCartModule {}

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { FavouritesComponent } from "./shared/favourites/favourites.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: "", redirectTo: "/sneakers", pathMatch: "full" },
  { path: "contact", component: ContactComponent },
  { path: "collection", component: ContactComponent },
  {
    path: "sneakers",
    loadChildren: () =>
      import("./sneakers/sneakers.module").then((x) => x.SneakersModule),
  },
  // { path: 'shopping-cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then( x => x.ShoppingCartModule)},
  { path: "shopping-cart", component: ShoppingCartComponent },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((x) => x.AuthModule),
  },
  { path: "favourites", component: FavouritesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}

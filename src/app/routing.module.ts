import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
// import { AuthComponent } from "./auth/auth.component";
import { ContactComponent } from "./contact/contact.component";
import { ShoppingCartListComponent } from "./shopping-cart/shopping-cart-list/shopping-cart-list.component";
import { SneakersDetailComponent } from "./sneakers/sneakers-detail/sneakers-detail.component";
import { SneakersEditComponent } from "./sneakers/sneakers-edit/sneakers-edit.component";
import { SneakersresolverService } from "./sneakers/sneakers-resolver.service";
import { SneakersStartComponent } from "./sneakers/sneakers-start/sneakers-start.component";
import { SneakersComponent } from "./sneakers/sneakers.component";

const routes: Routes = [
    { path: '', redirectTo: '/sneakers', pathMatch: 'full'},
    {
        path: 'sneakers', component: SneakersComponent,
        // canActivate: [AuthGuard],
        children: [
            {path: '', component: SneakersStartComponent},
            {path: 'new', component: SneakersEditComponent},
            {path: ':id', component: SneakersDetailComponent, resolve: [SneakersresolverService] },
            {path: ':id/edit', component: SneakersEditComponent, resolve: [SneakersresolverService] }
        ]
    },
    {path: 'auth', component: AuthComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'collection', component: ContactComponent},
    {path: 'shopping', component: ShoppingCartListComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{}
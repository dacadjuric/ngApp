import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { SneakersDetailComponent } from "./sneakers-detail/sneakers-detail.component";
import { SneakersEditComponent } from "./sneakers-edit/sneakers-edit.component";
import { SneakersresolverService } from "./sneakers-resolver.service";
import { SneakersStartComponent } from "./sneakers-start/sneakers-start.component";
import { SneakersComponent } from "./sneakers.component";


const routes: Routes = [
    {
        path: '', component: SneakersComponent,
        // canActivate: [AuthGuard],
        children: [
            {path: '', component: SneakersStartComponent},
            {path: 'new', component: SneakersEditComponent},
            {path: ':id', component: SneakersDetailComponent, resolve: [SneakersresolverService] },
            {path: ':id/edit', component: SneakersEditComponent, resolve: [SneakersresolverService] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SneakersRoutingModule{

}
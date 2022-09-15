import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SneakersDetailComponent } from "./sneakers-detail/sneakers-detail.component";
import { SneakersEditComponent } from "./sneakers-edit/sneakers-edit.component";
import { SneakersItemComponent } from "./sneakers-list/sneakers-item/sneakers-item.component";
import { SneakersListComponent } from "./sneakers-list/sneakers-list.component";
import { SneakersRoutingModule } from "./sneakers-routing.module";
import { SneakersStartComponent } from "./sneakers-start/sneakers-start.component";
import { SneakersComponent } from "./sneakers.component";


@NgModule({
  declarations: [
    SneakersComponent,
    SneakersStartComponent,
    SneakersListComponent,
    SneakersEditComponent,
    SneakersDetailComponent,
    SneakersItemComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    SneakersRoutingModule,
    CarouselModule
  ]
})
export class SneakersModule {}

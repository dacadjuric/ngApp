import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Sneakers } from "../sneakers.model";
import { SneakersService } from "../sneakers.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: "app-sneakers-list",
  templateUrl: "./sneakers-list.component.html",
  styleUrls: ["./sneakers-list.component.scss"]
})
export class SneakersListComponent implements OnInit, OnDestroy {
  sneakers: Sneakers[];
  subscription: Subscription;

  constructor(
    private sneakersService: SneakersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.sneakersService.sneakersChanged.subscribe(
      (s: Sneakers[]) => {
        this.sneakers = s;
      }
    );
    this.sneakers = this.sneakersService.getSneakers();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  onNewSneakers() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sneakers } from '../sneakers.model';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-sneakers-list',
  templateUrl: './sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.scss']
})
export class SneakersListComponent implements OnInit, OnDestroy {

  sneakers: Sneakers[];
  subscription: Subscription;

  constructor(private sneakersService: SneakersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.subscription = this.sneakersService.sneakersChanged.subscribe(
      (s: Sneakers[]) => {
        this.sneakers = s;
      }
    )
    this.sneakers = this.sneakersService.getSneakers();
  }

  onNewSneakers(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}

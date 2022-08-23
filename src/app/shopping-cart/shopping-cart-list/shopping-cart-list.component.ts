import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sneakers } from 'src/app/sneakers/sneakers.model';
import { ShoppingCartListService } from './shopping-cart-list.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit, OnDestroy {

  sneakers: Sneakers[] ;

  private changeSubscription: Subscription;

  constructor(private sclService: ShoppingCartListService) { }

  ngOnInit() {
    this.sneakers = this.sclService.getSneakers();
    this.changeSubscription =  this.sclService.snekersChanged.subscribe(
      (sn: Sneakers[]) => {
        this.sneakers = sn;
      }
    );
  }

  onEditSneakers(i: number){
    this.sclService.editing.next(i);
  }

  ngOnDestroy() {
      this.changeSubscription.unsubscribe();
  }

}

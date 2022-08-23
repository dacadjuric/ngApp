import { Sneakers } from "./sneakers.model";
import { HttpClient } from "@angular/common/http";
import { ShoppingCartListService } from "../shopping-cart/shopping-cart-list/shopping-cart-list.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SneakersService {

    // private sneakers: Sneakers[] = [];

    sneakersSelected = new Subject<Sneakers>();

    sneakersChanged = new Subject<Sneakers[]>();

    private sneakers: Sneakers[] = [
        // new Sneakers('Test patike 1', 'Ovo su patike 1', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.845xh;0,0.0400xh&resize=1200:*', 3),
        // new Sneakers('Test patike 2', 'Ovo su patike 2', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.845xh;0,0.0400xh&resize=1200:*', 1)
      ];

    constructor(private http: HttpClient, private sclService: ShoppingCartListService){}

    getPairOfSneakers(id: number){
        return this.sneakers.slice()[id];
    }

    getSneakers(){
        return this.sneakers.slice();
    }

    //ovde promeniti ime u addtofavourites
    addSnekaersToShoppingCart(sneakers: Sneakers[]){
        this.sclService.addArrayOfSneakers(sneakers);
    }

    addSneakers(sneaker: Sneakers){
        this.sneakers.push(sneaker);
    }

    addPairOfSneakers(s: Sneakers){
        this.sneakers.push(s);
        this.sneakersChanged.next(this.sneakers.slice());
    }

    updatePairOfSneakers(id: number, newSneakers: Sneakers){
        this.sneakers[id] = newSneakers;
        this.sneakersChanged.next(this.sneakers.slice());
    }

    deletePairOfSneakers(id: number){
        this.sneakers.splice(id, 1);
        this.sneakersChanged.next(this.sneakers.slice());
    }

    //overvriting sneakers sa novim sneakers
    setSneakers(s: Sneakers[]){
        this.sneakers = s;
        this.sneakersChanged.next(this.sneakers.slice());
    }

}
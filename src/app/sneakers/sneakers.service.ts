import { Sneakers } from "./sneakers.model";
import { HttpClient } from "@angular/common/http";
import { ShoppingCartListService } from "../shopping-cart/shopping-cart-list/shopping-cart-list.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import sneakersImages from '../shared/sneakersImages.json';


@Injectable()
export class SneakersService {

    // private sneakers: Sneakers[] = [];

    sneakersSelected = new Subject<Sneakers>();

    sneakersChanged = new Subject<Sneakers[]>();

    private sneakers: Sneakers[] = sneakersImages;


    constructor(private http: HttpClient, private sclService: ShoppingCartListService){}

    getPairOfSneakers(id: number){
        return this.sneakers.slice()[id];
    }

    getSneakers(){
        return this.sneakers.slice();
    }

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
        console.log(s);
        this.sneakersChanged.next(this.sneakers.slice());
    }

}
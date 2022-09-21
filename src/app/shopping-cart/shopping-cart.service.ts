import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Sneakers } from "../sneakers/sneakers.model";


@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    public cartItemList : Sneakers[] = [];
    public sneakersList = new BehaviorSubject<Sneakers[]>([]);

    constructor(){}

    getSneakers(){
        return this.sneakersList.asObservable();
    }

    setSneakers(sn: any){
        this.cartItemList.push(...sn);
        this.sneakersList.next(sn);
    }

    addToCart(sn: any){
        this.cartItemList.push(sn);
        this.sneakersList.next(this.cartItemList);
        this.getTotalPrice();
    }

    getTotalPrice(){
        let grandTotal = 0;
        this.cartItemList.map((s: any) => {
            grandTotal += s.price;
        })
    }

    removeCartItem(sn : any){
        this.cartItemList.map((s:any, i:any) => {
            if(sn.id === s.id){
                this.cartItemList.splice(i, 1);
            }
        })
    }

    removeAllCartitems(){
        this.cartItemList = [];
        this.sneakersList.next(this.cartItemList);
    }

}
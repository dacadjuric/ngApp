import { BehaviorSubject, Subject } from "rxjs";
import { Sneakers } from "src/app/sneakers/sneakers.model";

export class ShoppingCartListService{

    snekersChanged = new Subject<Sneakers[]>();

    cartItemList: any = [];
    sneakersList = new BehaviorSubject<any>([]);

    editing = new Subject<number>();
    
    private sneakers: Sneakers[] = [
        new Sneakers('Test patike 1', 'Ovo su patike 1', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.845xh;0,0.0400xh&resize=1200:*',3),
        new Sneakers('Test patike 2', 'Ovo su patike 2', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.845xh;0,0.0400xh&resize=1200:*',1)
    ];

    getSneakers(){
        // return this.sneakers.slice();
        return this.sneakersList.asObservable();
    }

    getPairOfSneakers(i: number){
        return this.sneakers[i];
    }

    addSneakers(sn: any){
        // this.sneakers.push(sn);
        // this.snekersChanged.next(this.sneakers.slice());

        this.cartItemList.push(...sn);
        this.sneakersList.next(sn);
    }

    addToCart(prod: any){
        this.cartItemList.push(prod);
        this.sneakersList.next(this.cartItemList);
        this.totalPrice();
    }

    totalPrice(){
        let grandTotal = 0;
        this.cartItemList.map((p: any) => {
            grandTotal += p.totalPrice;
        })
    }

    removeCartItem(sn: any){
        this.cartItemList.map((a:any, index:any) => {
            if(sn.id === a.id){
                this.cartItemList.splice(index, 1);
            }
        });
    }

    removeAllCartItems(){
        this.cartItemList = [];
            this.sneakersList.next(this.cartItemList);
    }

    addArrayOfSneakers(sn : Sneakers[]){
        this.sneakers.push(...sn);
        this.snekersChanged.next(this.sneakers.slice());
    }

    updateSnekaers(i: number, newSneakers: Sneakers){
        this.sneakers[i] = newSneakers;
        this.snekersChanged.next(this.sneakers.slice());
    }

    deleteSneakers(id: number){
        this.sneakers.splice(id, 1);
        this.snekersChanged.next(this.sneakers.slice());
    }
}
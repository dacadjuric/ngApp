import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Sneakers } from 'src/app/sneakers/sneakers.model';
import { ShoppingCartListService } from '../shopping-cart-list/shopping-cart-list.service';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.scss']
})
export class ShoppingCartEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) sclForm : NgForm;

  subscription: Subscription;

  editingMode = false;
  editedIndex: number;
  editedSneakers: Sneakers;

  constructor(private sclService: ShoppingCartListService) { }
  

  ngOnInit() {
    this.subscription = this.sclService.editing.subscribe(
      (i: number) => {
        this.editedIndex = i;
        this.editingMode = true;
        this.editedSneakers = this.sclService.getPairOfSneakers(i);
        this.sclForm.setValue(
          {
            name: this.editedSneakers.name,
            // description: this.editedSneakers.description,
            image: this.editedSneakers.imagePath,
            amount: this.editedSneakers.amount
          }
        )
      }
    );
  }

  onAddToCart(form: NgForm){

    const value = form.value;
    const newSneakers = new Sneakers(value.name, value.description, value.image, value.amount);

    if(this.editingMode){
      this.sclService.updateSnekaers(this.editedIndex, newSneakers);
    }else{
      this.sclService.addSneakers(newSneakers);
    }

    this.editingMode = false;
    form.reset();
  }

  onClear(){
    this.sclForm.reset();
    this.editingMode = false;
  }

  onDelete(){
    this.sclService.deleteSneakers(this.editedIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

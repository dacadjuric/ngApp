import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Sneakers } from '../sneakers/sneakers.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  sneakers: Sneakers[] = [
    new Sneakers('Patike 1', 'Patike 1 desc', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.845xh;0,0.0400xh&resize=1200:*', 2),
    new Sneakers('Patike 2', 'Patike 2 desc', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/9-5-1647879684.jpg?crop=1.00xw:0.845xh;0,0.0400xh&resize=1200:*', 3)
  ];

  @ViewChild('nameInput', {static: false}) nameInputER: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputER: ElementRef;
  @ViewChild('description', {static: false}) description: ElementRef;
  @ViewChild('image', {static: false}) image: ElementRef;

  @Output() sneakersAdded = new EventEmitter<Sneakers>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    const name = this.nameInputER.nativeElement.value;
    const amount = this.amountInputER.nativeElement.value;
    const description = this.description.nativeElement.value;
    const image = this.image.nativeElement.value;

    const newSneakers = new Sneakers(name, description, image, amount);

    this.sneakersAdded.emit(newSneakers);
  }

  onSneakersAddedToCart(s: Sneakers){
    this.sneakers.push(s);
  }

}

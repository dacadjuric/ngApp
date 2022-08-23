import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sneakers } from '../sneakers.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}

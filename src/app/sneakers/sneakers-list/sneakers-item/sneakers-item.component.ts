import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sneakers } from '../../sneakers.model';

@Component({
  selector: 'app-sneakers-item',
  templateUrl: './sneakers-item.component.html',
  styleUrls: ['./sneakers-item.component.scss']
})
export class SneakersItemComponent implements OnInit {

  @Input() sneakers: Sneakers;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

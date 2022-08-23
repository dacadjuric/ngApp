import { Component, OnInit } from "@angular/core";
import { Sneakers } from "./sneakers.model";

@Component({
    selector: 'app-sneakers',
    templateUrl: './sneakers.component.html',
    styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit{

    selectedSneakers: Sneakers;

    constructor(){}

    ngOnInit() {
    }
}
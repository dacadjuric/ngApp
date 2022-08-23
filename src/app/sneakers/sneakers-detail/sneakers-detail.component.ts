import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Sneakers } from '../sneakers.model';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-sneakers-detail',
  templateUrl: './sneakers-detail.component.html',
  styleUrls: ['./sneakers-detail.component.scss']
})
export class SneakersDetailComponent implements OnInit {

  sneakers: Sneakers;

  id: number;

  constructor(private sneakersService: SneakersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.sneakers = this.sneakersService.getPairOfSneakers(this.id);
    })
  }

  onAddToShoppingCart(){
    this.sneakersService.addSnekaersToShoppingCart(this.sneakers['']);
  }

  onEditSneakers(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteSneakers(){
    this.sneakersService.deletePairOfSneakers(this.id);
    this.router.navigate(['/sneakers']);
  }

}

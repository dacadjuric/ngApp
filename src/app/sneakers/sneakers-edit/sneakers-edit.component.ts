import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Sneakers } from '../sneakers.model';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-sneakers-edit',
  templateUrl: './sneakers-edit.component.html',
  styleUrls: ['./sneakers-edit.component.scss']
})
export class SneakersEditComponent implements OnInit {

  id:number;
  editMode = false;
  sneakersForm: FormGroup;

  constructor(private route: ActivatedRoute, private sneakersService: SneakersService, private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initializeForm();
      }
    );
  }

  onSubmit(){
    if(this.editMode){
      this.sneakersService.updatePairOfSneakers(this.id, this.sneakersForm.value);
    }else{
      this.sneakersService.addPairOfSneakers(this.sneakersForm.value);
    }

    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initializeForm(){
      let name = '';
      let imageURL = '';
      let desc = '';

      if(this.editMode){
        const sneakers = this.sneakersService.getPairOfSneakers(this.id);
        name = sneakers.name;
        imageURL = sneakers.imagePath;
        desc  =sneakers.description;
      }
    this.sneakersForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'image': new FormControl(imageURL, Validators.required),
      'description': new FormControl(desc, Validators.required)
    });

  }

}

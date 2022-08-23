import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Sneakers } from "./sneakers.model";
import { SneakersService } from "./sneakers.service";

@Injectable({
    providedIn: 'root'
}) //ovo premestiti u app.module
export class SneakersresolverService implements Resolve<Sneakers[]>{

    constructor(private dss: DataStorageService, private sneakersSerivce: SneakersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Sneakers[] | Observable<Sneakers[]> | Promise<Sneakers[]> {

        const sneakers = this.sneakersSerivce.getSneakers();
        
        if(sneakers.length === 0){
            return this.dss.fetchSneakers();
        }else{
            return sneakers;
        }
    }
}
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Sneakers } from "../sneakers/sneakers.model";
import { SneakersService } from "../sneakers/sneakers.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {

   constructor(private http: HttpClient, private sneakersService: SneakersService, private authService: AuthService){}

    storingSneakers(){
        const sneakers = this.sneakersService.getSneakers();
        this.http.put('https://angular22sneakersapp-default-rtdb.europe-west1.firebasedatabase.app/sneakers.json',
        sneakers).subscribe(res => {
            console.log(res);
        });
    }

   fetchSneakers(){
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            return this.http.get<Sneakers[]>('https://angular22sneakersapp-default-rtdb.europe-west1.firebasedatabase.app/sneakers.json');
        }), )
        .pipe(map(s => {
            return !s ? null : s.map(res => {
                    return {...res}
                });
            })
        )
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sneakers } from "../sneakers.model";
// import images from './sneakersImages.json';

@Injectable({ providedIn: "root" })
export class SneakersDeatilService {
  private _imagesUrl = "app/sneakers/sneakers-detail/sneakersImages.json";


  constructor(private http: HttpClient, private sn: Sneakers) {}

  getImages(): Observable<Sneakers[]> {
    return this.http.get<Sneakers[]>(this._imagesUrl);
  }
}

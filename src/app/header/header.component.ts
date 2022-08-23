import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
// import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";
import { SneakersService } from "../sneakers/sneakers.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{

    private userSubscription!: Subscription;
    isAuthenticated = false;

    constructor( private data: DataStorageService, private authService: AuthService){}

    onSaveSneakers(){
        this.data.storingSneakers();
    }

    onFetchData(){
        this.data.fetchSneakers().subscribe();
    }
    
    ngOnInit(){
        this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
       
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
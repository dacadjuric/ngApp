import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loaded = 'sneakers';
  title = 'sneakersApp';

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.autologin();
  }

  onNavigate(feature: string) {
    this.loaded = feature;
  }
}

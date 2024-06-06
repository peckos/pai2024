import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(private api: AuthService){}

  getMe(){
    this.api.me().subscribe((resp)=>{
 console.log("resp ", resp);

    })
  }

}

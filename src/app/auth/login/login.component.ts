import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: any = {};
  rememberMe = false;
  loading = false;

  constructor(private api: AuthService, private router: Router){}

  login() {
    this.loading = true;
    this.api.login(this.credentials).subscribe((response:any) => {
      this.router.navigate(['/'])
      this.loading = false;
      if(this.rememberMe){
        localStorage.setItem('token', response.jwt);
      }else{
        sessionStorage.setItem("token", response.jwt);
      }

      setTimeout(() => {
        this.api.me().subscribe((resp)=>{
   console.log("resp ", resp);

        })

      }, 500);
    });
  }
}

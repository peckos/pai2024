import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any){
    return this.http.post('http://localhost:1337/api/auth/local', credentials);
  }

  me(){
    return this.http.get('http://localhost:1337/api/users-permissions/permissions');
  }



  isAuthorized():boolean{
    return !!localStorage.getItem('token');
  }
}

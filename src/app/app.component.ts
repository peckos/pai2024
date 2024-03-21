import { Component } from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pai';
  showMenu = true;
  form = this.service.form;
  userForm: IUser = {
    name: '',
    desc: '',
    type: ''
  };

  userDynamicData: IUser[] = this.service.userDynamicData;

  constructor(private service: UserService){}

  addItem(newItem: string) {
    console.log('przyszła wartość z dziecka: ', newItem);
  }

  addNewUser() {
    let data: IUser = {...this.userForm};
    this.userDynamicData.push(data);
  }
}

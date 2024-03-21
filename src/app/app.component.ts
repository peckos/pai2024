import { Component } from '@angular/core';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pai';
  showMenu = true;
  form = '';
  userForm: IUser = {
    name: '',
    desc: '',
    type: ''
  };

  userDynamicData: IUser[] = [
    {
      name: 'Imie Dynamiczne 1',
      desc: 'dsfsdfsdfsdf DSadsfg',
      type: 'type1'
    },
    {
      name: 'Imie Dynamiczne 2',
      desc: 'dsfsdfsdfsdf DSadsfg',
      type: 'type2'
    },
    {
      name: 'Imie Dynamiczne 3',
      desc: 'dsfsdfsdfsdf DSadsfg',
      type: 'type3'
    }
  ];

  addItem(newItem: string) {
    console.log('przyszła wartość z dziecka: ', newItem);
  }

  addNewUser() {
    let data: IUser = {...this.userForm};
    this.userDynamicData.push(data);
  }
}

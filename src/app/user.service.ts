import { Injectable } from '@angular/core';
import { IUser } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  form = {input: 'test'};
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
  constructor() {}
}

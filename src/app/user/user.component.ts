import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  formFromParent = this.service.form;
  @Input() userData:IUser = {
    name: 'Imie i Nazwisko',
    type: 'type1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic esse dignissimos corporis vero minima reiciendis nihil soluta tenetur praesentium sit, modi aliquid at sapiente blanditiis! Quam porro exercitationem debitis.'
  };

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(public service: UserService) {}

  prev(name:string) {
    this.newItemEvent.emit(name);
    console.log('prev');
  }
}

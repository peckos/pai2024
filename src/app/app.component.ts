import { Component } from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = new FormControl('');
  title = 'pai';
  showMenu = true;
  form = this.service.form;
  userForm: IUser = {
    name: '',
    desc: '',
    type: ''
  };

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  userDynamicData: IUser[] = this.service.userDynamicData;

  constructor(
    private service: UserService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.service.getUsers().subscribe((resp) => {
      console.log('resp: ', resp);
    });
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  addItem(newItem: string) {
    console.log('przyszła wartość z dziecka: ', newItem);
  }

  addNewUser() {
    let data: IUser = { ...this.userForm };
    this.userDynamicData.push(data);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  title = 'Jakaś wartość';
  showList = false;
  list = [
    {
      name: 'tytuł1',
      href: 'fsdfsdfds'
    },
    {
      name: 'tytuł2',
      href: 'fsdfsdfds'
    },
    {
      name: 'tytuł3',
      href: 'fsdfsdfds'
    }
  ];

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addMenuItem(param:any){
    this.list.push({name: 'dodane '+param, href:'dfsdf'})
  }
}

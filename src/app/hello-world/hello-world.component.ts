import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input('user') user: User;
  isVisible : boolean = false;
  constructor() { 
    
  }
  User: User;
  toggle(){
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
    this.User = {
      name: this.user.name,
      Address: this.user.Address,
      phone: this.user.phone
    }
  }

}

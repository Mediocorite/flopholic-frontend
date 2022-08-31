import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // Creating a basic user
  defaultUser: User = { name: '', password: '', email: '' };
  newUser: User = this.defaultUser;

  constructor() {}

  ngOnInit(): void {}

  onRegister() {
    debugger;
    console.log('This is the new user', this.newUser);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Create a state for login info from the form.
  // Verify the details being present in login-details
  // on submit.

  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {}

  onLogin(loginDetails: User) {
    console.log(`Hello there`);
  }
}

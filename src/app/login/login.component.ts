import { Component, OnInit,Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() users: { email: string, password: string, firstName: string, lastName: string, avatarUrl: string }[];
  currentUser: any;
  loginMessage: string;


  constructor() { }

  ngOnInit() { }

  login(loginForm: NgForm) {
    let user = this.users.filter(user => user.email === loginForm.value.username);

    if (user[0]) {
      if (user[0].password === loginForm.value.password) {
        this.currentUser = user[0];
        this.loginMessage = `Success! Logged in as ${this.currentUser.firstName} ${this.currentUser.lastName}.`
      } else {
        this.loginMessage = 'Invalid login. Please try again';
      }
    } else {
      this.loginMessage = 'Invalid login. Please try again';
    }
  }  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [
    { firstName: 'Admin', lastName: '1',email: 'info@admin.com', password: 'admin',  avatarUrl: '' },
    { firstName: 'User', lastName: '2',email: 'user1@user.com', password: '123',  avatarUrl: '' },
    { firstName: 'User', lastName: '3', email: 'user2@user.com', password: '123',  avatarUrl: '' }
   ];
   chat = [
    { from: 'Admin', avatarUrl: '', message: 'How are you?' },
    { from: 'User1', avatarUrl: '', message: 'Good thank you, how are you?' },
    { from: 'User2', avatarUrl: '', message: 'Better than you' },
  ];
  constructor() { }
  ngOnInit() {
  }

}

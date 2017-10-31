import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
@Input() chat: { from: string, message: string }[];
  IsClosed = false;

  constructor() { }
  ngOnInit() {
  }
}

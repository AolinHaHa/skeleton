import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twobuttons',
  templateUrl: './twobuttons.component.html',
  styleUrls: ['./twobuttons.component.css']
})
export class TwobuttonsComponent implements OnInit {
  @Input() button1Text: string;
  @Input() button2Text: string;

  constructor() { }

  ngOnInit() {
  }

}

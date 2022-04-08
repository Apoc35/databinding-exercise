import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'databinding-exercise';
  username = '';

  constructor() {

  }

  ngOnInit() {

  }

  OnUsernameUpdate(event: Event) {

    this.username = (<HTMLInputElement>event.target).value;
  };

  buttonCheck() {

    this.username = "";

  }

}

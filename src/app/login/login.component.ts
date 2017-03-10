import {Component, OnInit} from "@angular/core";
const R = require('ramda');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  login(username, password) {

    if (!R.isEmpty(username) && !R.isEmpty(password)) {
      debugger;
    } else {

    }

  }

}

import {Component, OnInit} from "@angular/core";
import * as R from "ramda";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  login(username, password) {

    if (!R.isEmpty(username) && !R.isEmpty(password)) {
      /* Call Login service */
    } else {
      /* Show error message */
    }

  }

}

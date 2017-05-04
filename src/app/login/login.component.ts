import {Component, OnInit} from "@angular/core";
import * as R from "ramda";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: Router;
  errorMessage: string = '';

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  login(username, password) {
    this.errorMessage = '';
    if (!R.isEmpty(username) && !R.isEmpty(password)) {
      if (username === 'home' && password === 'home') {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Username or Password is incorrect!';
      }
    } else {
      this.errorMessage = 'Please enter username or password!';
    }

  }

}

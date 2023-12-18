import { Component, OnInit } from '@angular/core';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signupUser :any [] =[];
  signUpObj : any ={
    userName : "",
    userPass : "",
    userEmail: ""
  }
  loginObj :any ={
    username : "",
    userpass : "",
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
}

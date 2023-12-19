import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLoggedIn: boolean = false;

  signupUser: any[] = [];
  signUpObj: any = {
    userName: "",
    userPass: "",
    userEmail: ""
  }

  loginObj: any = {
    username: "",
    userpass: "",
  }

  constructor(private router: Router) { }



  ngOnInit(): void {
    const localdata = localStorage.getItem('signupUser');
    if (localdata != null) {
      this.signupUser = JSON.parse(localdata);
    }
  }

  onSignUp() {
    this.signupUser.push(this.signUpObj)
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser))
    this.signUpObj = {
      userName: "",
      userPass: "",
      userEmail: ""
    }
  }

  onLogin(){
    this.isLoggedIn = true;

    const isUserExist = this.signupUser.find(m => m.userEmail == this.loginObj.useremail && m.userPass == this.loginObj.userpass);
    if (isUserExist != undefined) {
      this.router.navigateByUrl('/first-page')
      alert("User login success")
    } else {
      alert("Wrong ID or Pssword")
    }
  }


}

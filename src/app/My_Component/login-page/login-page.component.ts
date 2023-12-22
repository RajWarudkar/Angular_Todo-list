import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { DataService } from 'src/app/data.service.spec';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  message: string = '';


  sendMessage() {
    this.dataService.sendData(this.loginObj.username);
  }


  public display_username : string |undefined

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

  constructor(private router: Router,private dialog: MatDialog,private dataService: DataService) { }

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

    const isUserExist = this.signupUser.find(m => m.userName == this.loginObj.username && m.userPass == this.loginObj.userpass);
    if (isUserExist != undefined) {
      this.router.navigateByUrl('/first-page')
    } else {
      alert("Wrong ID or Pssword")
    }
    this.display_username=this.loginObj.username
  }

  @ViewChild('secondDialog', { static: true })
  secondDialog!: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }


    

  


}

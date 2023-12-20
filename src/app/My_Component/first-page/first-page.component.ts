import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service.spec';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  receivedMessage: string = '';



  
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.videoPlayer) {
      const videoPlayer: HTMLVideoElement = this.videoPlayer.nativeElement;
      // ... rest of your code
    } else {
      console.error('Video player element not found.');
    }
  }



  
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
    this.dataService.data$.subscribe((data) => {
      this.receivedMessage = data;
    });
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

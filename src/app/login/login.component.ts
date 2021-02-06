import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name =""
  password = ""
  isEmpty = 0
  isPassword =0
  isUsername = 0
  constructor() { }

  ngOnInit(): void {
  }
  
  submit(){
    if(this.name == "" && this.password == "")
     this.isEmpty = 1
    else if (this.name == "")
     this.isUsername = 1
    else if (this.password == "")
     this.isPassword = 1
    
     
  }
}

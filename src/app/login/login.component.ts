import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
  LoggedIn=0
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }
  
  submit(){
    if(this.name=="admin" && this.password=="admin")
    {
      this.router.navigate(['/dashboard'])
    }
    else if(this.name == "" && this.password == "")
    {
      this.isUsername = 1
      this.isPassword = 1
    }
    else if (this.name == "")
    {
     this.isUsername = 1
    }
    else if (this.password == "")
    {
     this.isPassword = 1 
    }


  }
}

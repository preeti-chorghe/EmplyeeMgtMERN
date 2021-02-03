import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name :string = 'Preeti'
  people : any={"name" : "Nisha",
                 "address" : "pune"}
  
  obj: personDetails = new personDetails("Maths");
  show :boolean = true

  hide(){
    this.show = !this.show
    console.log(this.show)
  }
}
class personDetails {
  subject : string ="Mathematics"
  person : any[] =[
    {"name" : "Nisha"},
    {"name" : "Prajwal"}
  ];
  constructor(subject : string) {
    this.subject = subject
  }
}



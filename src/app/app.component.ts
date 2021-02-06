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
  show :boolean = true

  hide(){
    this.show = !this.show
    console.log(this.show)
  }
}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bar = false;
  constructor() { }

  ngOnInit() {
  }

  ScrollToElement(ele){
    let element = document.getElementById(ele);
    element.scrollIntoView({behavior: "smooth"});
  }

  dropit(){
    this.bar = !this.bar;
  }

}

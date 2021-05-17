import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show()
  {
     alert("Welcome to Angular") 
  }
  trainer() 
  {
     alert("trainer is Prasanna...") 
  }

}

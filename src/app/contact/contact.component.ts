import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  over(){
    console.log("Mouseover called");
  }

  out(){
    console.log("Mouseout called");
  }
  nightMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

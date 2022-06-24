import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Constants from "../constants/Constants";
import {User} from "../model/User";
import { Technology } from '../model/Technology';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { 
  }

  
  ngOnInit(): void {
    
  }

}

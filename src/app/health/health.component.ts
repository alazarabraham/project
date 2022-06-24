import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Constants from "../constants/Constants";
import {Status} from "../model/Status";
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  constructor(private httpClient: HttpClient) { 
  }
  healthStatus: Status =  new Status();
  errorStatus: Status = new Status();
  getHealth(): Observable<any> {
    return this.httpClient.get(Constants.BASE_URL + "/health");
  }


  ngOnInit(): void {
    this.getHealth().subscribe(
      response => {
        this.healthStatus.setStatus(response.status)
        console.log(this.healthStatus);
      },
      error => {
        this.errorStatus.setStatus(error.message)
        console.log(this.errorStatus);

      }
      );
      
  }


}

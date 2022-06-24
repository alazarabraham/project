import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';
import Constants from "../constants/Constants";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Status } from '../model/Status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) { 
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }
  user: User = new User();
  status: Status = new Status;

  loginForm: FormGroup = new FormGroup({
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl("")
  });
  postUser(data:User): Observable<any> {
    return this.httpClient.post<any>(Constants.BASE_URL + "/users/addUser",data);
  }
  onSubmit(form: FormGroup){
    this.user.setFirstName(form.value.first_name);
    this.user.setLastName(form.value.last_name);
    this.user.setUsername(form.value.username);
    this.user.setPassword(form.value.password);
    console.log(this.user);
    this.postUser(this.user).subscribe({
      next: data => {
        console.log(data.status);
        this.status.setStatus(data.status);
        this.openSnackBar(this.status.status, "!");
    },
      error: error => {
          // this.errorMessage = error.message;
          this.status.setStatus(error.message);
          this.openSnackBar(this.status.status, "x");
      }
      
    })
  }


  ngOnInit(): void {
  }

}

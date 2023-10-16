import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private apiService: ApiService) {}
  /*ngOnInit(): void {
    this.apiService.checkAuth()
    .then((loggedIn) => {
      if(loggedIn){
        return true;
      }
      else return this.apiService.registerAuth();
    })
    .then((loggedIn) => {
      this.apiService.loginState.next(loggedIn);
    })
    .catch((error)=>{console.error(error);});
  }*/

  ngOnInit(): void {
    this.apiService.checkAuth()
    .then((loggedIn) => {
      this.apiService.loginState.next(loggedIn);
    })
    .catch((error)=>{console.error(error);});
  }
}

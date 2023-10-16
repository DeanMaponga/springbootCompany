import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuthenticated = false;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.loginState.subscribe(state => {this.isAuthenticated = state;});
  }
}

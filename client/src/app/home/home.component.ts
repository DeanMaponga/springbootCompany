import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'client';
  constructor(private router: Router,private apiService:ApiService) {}
  
  ngOnInit() {
  }

  currentPage(){
    return this.apiService.currentTab;
  }
  changePage(page: string) {
    this.apiService.currentTab = page;
    this.router.navigate([`/${page}`]);
  }
}

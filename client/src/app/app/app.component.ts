import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private router: Router,private apiService:ApiService) {}
  
  ngOnInit() {}

  currentPage(){
    return this.apiService.currentTab;
  }
  changePage(page: string) {
    this.apiService.currentTab = page;
    this.router.navigate([`/${page}`]);
  }
}

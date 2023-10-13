import { Component } from '@angular/core';
import { Employee } from '../models/employee_model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent {
  hasResults=false;
  hasError = false;
  isSearching=false;
  searchQuery="";
  title="Search for Employees by name";
  employees:Employee[]=[];

  constructor(private router: Router,private apiService: ApiService) {}
  
  canSubmit(){
    return this.searchQuery.length>0 && !this.isSearching;
  }
  searchEmployees(){
    this.hasError =false;
    this.isSearching =true;
    this.hasResults = false;
    this.apiService.getSearchEmployees({name:this.searchQuery})
    .then((results) => {
      this.isSearching = false;
      this.hasResults = true;
      this.employees = results;//.reverse();
      for(const employee of this.employees){
        if(employee.id!=null){
          this.apiService.AllEmployees[employee.id]=employee;
        }
      }
    })
    .catch((error) => {
      this.hasError = true;
      this.hasResults = false;
      this.isSearching = false;
        console.error('Error fetching employees:', error);
      }
    );
  }
}

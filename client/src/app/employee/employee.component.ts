import { Component } from '@angular/core';
import { Employee } from '../models/employee_model';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  isLoading = true;
  employees:Employee[] =[];
  constructor(private router: Router,private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllEmployees()
    .then((results) => {
      this.isLoading = false;
      this.employees = results;//.reverse();
      for(const employee of this.employees){
        if(employee.id!=null){
          this.apiService.AllEmployees[employee.id]=employee;
        }
      }
    })
    .catch((error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  
}
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee_model';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit{
  @Input() employee: Employee | undefined;
  constructor(private router: Router,private apiService:ApiService) {}

  ngOnInit() {
  }

  getStartDate(){
    const time:number= this.employee?.startDate != undefined?this.employee?.startDate:new Date().getTime();
    return new Date(time).toString()
  }

  navigateToEmployee(){
    if(this.employee!=undefined && this.employee.id!=null){
      this.router.navigate([`/employee/${this.employee?.id}`]);
    }
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Employee } from '../models/employee_model';
import { Company } from '../models/company_model';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent {
  isLoading = true;
  isDetails = false;
  
  employee:Employee={
    id: null,
    name: '',
    email: '',
    jobTitle: '',
    jobDescription: '',
    phoneNumber: '',
    imageUrl: '',
    startDate: new Date().getTime(),
    companyUid: 0,
    company: {
      id: null,
      name: "",
      address: "",
      industry: "",
      description: "",
      phoneNumber: "",
      imageUrl: "",
      createdDate: new Date().getTime(),
    }
  }
  employeeId="0";
  constructor(private router: Router,private route: ActivatedRoute,private apiService: ApiService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const Id = params.get('id')!=null?params.get('id'):"";
      if(Id !=null && Id.length>0){
        this.employeeId =Id;
        this.employee=this.apiService.AllEmployees[this.employeeId];
        if(this.employee!=undefined){
          this.isLoading = false;
          this.isDetails = true;
        }
      }
    });
  }
}

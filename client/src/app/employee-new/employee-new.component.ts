import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/company_model';
import { Employee } from '../models/employee_model';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent {
  isLoading = true;
  isDetails = false;
  company:Company={
    id: null,
    name: "",
    address: "",
    industry: "",
    description: "",
    phoneNumber: "",
    imageUrl: "",
    createdDate: new Date().getTime(),
  };
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
    company: this.company
  }
  companyId="0";
  constructor(private route: ActivatedRoute,private apiService: ApiService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const Id = params.get('id')!=null?params.get('id'):"";
      if(Id !=null && Id.length>0){
        this.companyId =Id;
        this.company=this.apiService.AllCompanies[this.companyId];
        if(this.company!=undefined){
          this.employee.company=this.company;
          if(this.company.id!=null){
            this.employee.companyUid=this.company.id;
          }
          this.isLoading = false;
          this.isDetails = true;
        }
      }
    });
  }
}

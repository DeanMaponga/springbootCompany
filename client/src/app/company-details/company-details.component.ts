import { Component } from '@angular/core';
import { Employee } from '../models/employee_model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Company } from '../models/company_model';
import { MatDialog } from '@angular/material/dialog';
import { CompanyDeleteComponent } from '../company-delete/company-delete.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  isLoading = true;
  searchQuery = '';
  isUpdate = false;
  isDetails = false;
  isSuccess = false;
  isError = false;
  isDeleted = false;
  errorMsg ="";
  successMsg =""
  title="Company Employees";
  companyId="";
  employees:Employee[] =[];
  company:Company|undefined;
  constructor(private router: Router,private route: ActivatedRoute,private apiService: ApiService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const Id = params.get('id')!=null?params.get('id'):"";
      if(Id !=null && Id.length>0){
        this.companyId =Id;
        this.company=this.apiService.AllCompanies[this.companyId];
        if(this.company!=undefined){
          this.title=`${this.company.name} Employees`;
          this.apiService.getCompanyEmployees(this.companyId)
          .then((results) => {
            this.employees = results.reverse();
            for(const employee of this.employees){
              if(employee.id!=null){
                this.apiService.AllEmployees[employee.id]=employee;
              }
            }
            this.isLoading = false;
            this.isDetails = true;
          })
          .catch((error) => {
              console.error('Error fetching employees:', error);
            }
          );
        }
        else{
          this.isLoading = false;
          this.isDeleted =true;
        }
      }
    });
  }
  
  updateCompany(){
    this.router.navigate([`/company/${this.companyId}/update`]);
  }
  addEmployee(){
    this.router.navigate([`/company/${this.companyId}/newEmployee`]);
  }
  deleteCompany(){
    const dialogRef = this.dialog.open(CompanyDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.isLoading = true;
        this.isDeleted = false;
        this.isDetails = false;
        this.apiService.deleteCompanyById(this.companyId)
        .then((results)=>{
          this.isDeleted=true;
          this.isLoading = false;
          this.isDetails = false;
          delete this.apiService.AllCompanies[this.companyId];
        }).catch((err)=>{console.log(err);
          this.isDetails = false;
          this.isLoading = false;
          this.isSuccess =  false;
          this.isError = true;
          this.errorMsg ="An error occured, make sure phone has 10 characters, email is valid and number of employees is integer";
          if(Object.keys(err["error"]).includes("details")){
            this.errorMsg = err["error"]["details"];
            console.log(this.errorMsg)
          }
        });
      }
    });
    
  }
}

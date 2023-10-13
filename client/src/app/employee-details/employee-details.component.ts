import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../models/employee_model';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  isLoading = true;
  searchQuery = '';
  isUpdate = false;
  isDetails = false;
  isSuccess = false;
  isError = false;
  isDeleted = false;
  errorMsg ="";
  successMsg =""
  title="Employee Details";
  employeeId="";
  employee:Employee|undefined;
  constructor(private router: Router,private route: ActivatedRoute,private apiService: ApiService,private dialog: MatDialog) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const Id = params.get('id')!=null?params.get('id'):"";
      if(Id !=null && Id.length>0){
        this.employeeId =Id;
        this.employee=this.apiService.AllEmployees[this.employeeId];
        if(this.employee!=undefined){
          this.title=this.employee.name;
          this.isLoading = false;
          this.isDetails = true;
        }
      }
    });
  }
  deleteEmployee(){
    const dialogRef = this.dialog.open(EmployeeDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.isLoading = true;
        this.isDeleted = false;
        this.isDetails = false;
        this.apiService.deleteEmployeeById(this.employeeId)
        .then((results)=>{
          this.isDeleted=true;
          this.isLoading = false;
          this.isDetails = false;
          delete this.apiService.AllEmployees[this.employeeId];
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

  updateEmployee(){
    this.router.navigate([`/employee/${this.employeeId}/update`]);
  }
}

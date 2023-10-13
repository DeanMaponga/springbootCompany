import { Component, Input } from '@angular/core';
import { Company } from '../models/company_model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
  isUpdate = false;
  isDetails = true;
  isLoading = false;
  isSuccess = false;
  isError = false;
  errorMsg ="";
  successMsg =""
  title="";
  @Input() company:Company|Company={
    id: null,
    name: "",
    address: "",
    industry: "",
    description: "",
    phoneNumber: "",
    imageUrl: "",
    createdDate: new Date().getTime(),
  };

  companyForm: FormGroup = new FormGroup({});

  constructor(private router: Router,private apiService: ApiService,private formBuilder: FormBuilder,private datePipe: DatePipe) { }

  ngOnInit() {
    this.isUpdate = this.company.id!=null;
    this.companyForm = this.formBuilder.group({
      id: [this.company.id],
      name: [this.company.name, Validators.required],
      address: [this.company.address, Validators.required],
      industry: [this.company.industry, Validators.required],
      description: [this.company.description, Validators.required],
      phoneNumber: [this.company.phoneNumber, Validators.required],
      imageUrl: [this.company.imageUrl, Validators.required],
      registrationDate: [this.getDate(), Validators.required],
    });
    this.title = this.isUpdate?"Update Company":"Add Company";
    this.successMsg = this.isUpdate?"Company updated successfully!":"Company added successfully!";
  }

  getDate(){
    return new Date(this.company.createdDate);
  }

  onSubmit() {
    if (this.companyForm.valid) {
      this.errorMsg = "";
      this.isDetails = false;
      this.isLoading = true;
      this.isError = false;
      this.isSuccess =  false;
      this.company.name =this.companyForm.value.name;
      this.company.address = this.companyForm.value.address;
      this.company.industry=this.companyForm.value.industry;
      this.company.description=this.companyForm.value.description;
      this.company.phoneNumber=this.companyForm.value.phoneNumber;
      this.company.imageUrl=this.companyForm.value.imageUrl;
      this.company.createdDate=this.companyForm.value.registrationDate.getTime();
      this.callAPI()
      .then((results)=>{
        this.company=results;
        if(this.company.id!=null){
          this.apiService.AllCompanies[this.company.id]=this.company;
        }

        this.isDetails = false;
        this.isLoading = false;
        this.isSuccess =  true;
        this.isError =false;
      })
      .catch((err)=>{console.log(err);
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
  }

  callAPI(){
    return  this.isUpdate?this.apiService.updateCompany(this.company):this.apiService.addCompany(this.company);    
  }

  onOKButtonClicked() {
    this.isDetails = true;
    this.isError = false;
    this.isLoading = false;
    this.isSuccess = false;

    if(this.company?.id!==null){
      this.router.navigate(['/company', this.company?.id]);
    }
  }
}

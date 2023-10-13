import { Component } from '@angular/core';
import { Company } from '../models/company_model';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent {
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
  companyId = "";
  constructor(private router: Router,private route: ActivatedRoute,private apiService: ApiService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const Id = params.get('id')!=null?params.get('id'):"";
      if(Id !=null && Id.length>0){
        this.companyId =Id;
        this.company=this.apiService.AllCompanies[this.companyId];
        if(this.company!=undefined){
          this.isLoading = false;
          this.isDetails = true;
        }
      }
    });
  }
}

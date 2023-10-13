import { Component, Input } from '@angular/core';
import { Company } from '../models/company_model';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() company: Company | Company={
    id: null,
    name: '',
    address: '',
    industry: '',
    description: '',
    phoneNumber: '',
    imageUrl: '',
    createdDate: new Date().getTime()
  };
  constructor(private router: Router,private apiService: ApiService) {}

  navigateToCompany() {
    if(this.company?.id!==null){
      this.router.navigate(['/company', this.company?.id]);
    }
  }

  getCreatedDate(){
    const time:number= this.company?.createdDate != undefined?this.company?.createdDate:new Date().getTime();
    return new Date(time).toString()
  }
}

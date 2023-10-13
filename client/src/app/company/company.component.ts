import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Company } from '../models/company_model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  isLoading = true;
  companies:Company[] =[];
  constructor(private router: Router,private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllCompanies()
    .then((results) => {
      this.isLoading = false;
      this.companies = results;
      for(const company of this.companies){
        if(company.id!=null){
          this.apiService.AllCompanies[company.id]=company;
        }
      }
    })
    .catch((error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }
}

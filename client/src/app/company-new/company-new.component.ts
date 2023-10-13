import { Component } from '@angular/core';
import { Company } from '../models/company_model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.scss']
})
export class CompanyNewComponent {
  newCompany:Company={
    id: null,
    name: "",
    address: "",
    industry: "",
    description: "",
    phoneNumber: "",
    imageUrl: "",
    createdDate: new Date().getTime(),
  };
}

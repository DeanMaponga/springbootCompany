import { Company } from "./company_model";

export interface Employee {
    id:number|null;
    name:string;
    email:string;
    jobTitle:string;
    jobDescription:string;
    phoneNumber:string;
    imageUrl:string;
    startDate:number;
    companyUid:number;
    company:Company;
}
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee_model';
import { Company } from '../models/company_model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentTab: string = 'home';
  //private baseUrl = 'http://localhost:8080';
  //private baseUrl = 'https://localhost:443';
  private baseUrl = 'https://apidev2.codevirtus.com/api';
  localtoken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTczMDY1NDIsImV4cCI6MTY5ODc3Nzc3MX0.KzI-bE6S4NFmxOn2LDPfGrbYNTGbVYWqy4m0y5uBZF0";
  token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTczMTQwODIsImV4cCI6MTY5ODc4NTMxMX0.WebvaTI-bS1cmGZpVzZppPN-XeZRP1UYuxG43ETSN8g";
  oldToken = 'Basic ' + btoa('user:e043ead5-e035-4dea-8ffc-1b979d7526ed');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${this.apiKey}`
      //'Authorization': `Bearer ${this.token}` //in practice do not hard code username & password like this
    }),
  };
  AllCompanies:any={}
  AllEmployees:any={}
  
  constructor(private http: HttpClient) { 

  }

  log(data:any){
    console.log(data)
  }

  getAllCompanies(): Promise<any> {
    const url = `${this.baseUrl}/company/all`; 
    return this.http.get(url,this.httpOptions).toPromise();
  }

  getCompanyById(companyId:string): Promise<any> {
    const url = `${this.baseUrl}/company/find/${companyId}`; 
    return this.http.get(url,this.httpOptions).toPromise();
  }

  addCompany(data:any):Promise<any>{
    const url = `${this.baseUrl}/company/add`; 
    return this.http.post(url,data,this.httpOptions).toPromise();
  }

  updateCompany(data:any):Promise<any>{
    const url = `${this.baseUrl}/company/update`; 
    return this.http.put(url,data,this.httpOptions).toPromise();
  }

  deleteCompanyById(companyId:any): Promise<any> {
    const url = `${this.baseUrl}/company/delete/${companyId}`; 
    return this.http.delete(url,this.httpOptions).toPromise();
  }

  getAllEmployees(): Promise<any> {
    const url = `${this.baseUrl}/employee/all`; 
    return this.http.get(url,this.httpOptions).toPromise();
  }

  getEmployeeById(employeeId:string): Promise<any> {
    const url = `${this.baseUrl}/employee/find/${employeeId}`; 
    return this.http.get(url,this.httpOptions).toPromise();
  }

  addEmployee(data:any):Promise<any>{
    const url = `${this.baseUrl}/employee/add`; 
    return this.http.post(url,data,this.httpOptions).toPromise();
  }

  updateEmployee(data:any):Promise<any>{
    const url = `${this.baseUrl}/employee/update`; 
    return this.http.put(url,data,this.httpOptions).toPromise();
  }

  deleteEmployeeById(employeeId:string): Promise<any> {
    const url = `${this.baseUrl}/employee/delete/${employeeId}`; 
    return this.http.delete(url,this.httpOptions).toPromise();
  }

  getCompanyEmployees(companyId:any): Promise<any> {
    const url = `${this.baseUrl}/employee/company/${companyId}`; 
    return this.http.get(url,this.httpOptions).toPromise();
  }

  getSearchEmployees(data:any): Promise<any> {
    const newHttpOptions={
      headers:this.httpOptions.headers,
      params:new HttpParams({ fromObject: data })
    }
    const url = `${this.baseUrl}/employee/search?`;
    return this.http.get(url,newHttpOptions).toPromise();
  }
}

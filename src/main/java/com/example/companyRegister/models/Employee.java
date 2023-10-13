package com.example.companyRegister.models;

import java.io.Serializable;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Employee implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String jobDescription;
    private String phoneNumber;
    private String imageUrl;
    private Long startDate;
    private Long companyUid;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "company_id")
    private Company company;

    public Employee(){}
    public Employee(String name,String email, String jobTitle, String jobDescription, String phoneNumber, String imageUrl, Long startDate,Long companyUid,Company company){
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.jobDescription = jobDescription;
        this.phoneNumber = phoneNumber;
        this.imageUrl =imageUrl;
        this.startDate = startDate;
        this.companyUid =companyUid;
        this.company = company;
    }
    public void setId(Long id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setJobTitle(String jobTitle){
        this.jobTitle = jobTitle;
    }
    public void setJobDescription(String jobDescription){
        this.jobDescription = jobDescription;
    }
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }
    public void setStartDate(Long startDate){
        this.startDate = startDate;
    }
    public void setCompanyUid(Long companyUid){
        this.companyUid = companyUid;
    }
    public void setCompany(Company company){
        this.company = company;
    }
    
    public Long getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public String getEmail(){
        return email;
    }
    public String getJobTitle(){
        return jobTitle;
    }
    public String getJobDescription(){
        return jobDescription;
    }
    public String getPhoneNumber(){
        return phoneNumber;
    }
    public String getImageUrl(){
        return imageUrl;
    }
    public Long getStartDate(){
        return startDate;
    }
    public Long getCompanyUid(){
        return companyUid;
    }
    public Company getCompany(){
        return company;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", jobDescription='" + jobDescription + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", startDate=" + startDate +
                ", companyUid=" + companyUid +
                ", company=" + company +
                '}';
    }
}


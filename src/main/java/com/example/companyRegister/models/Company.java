package com.example.companyRegister.models;

import java.io.Serializable;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Company implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String address;
    private String industry;
    private String description;
    private String phoneNumber;
    private String imageUrl;
    private Long createdDate;

    public Company(){}
    public Company(String name,String address, String industry, String description, String phoneNumber, String imageUrl, Long createdDate){
        this.name = name;
        this.address = address;
        this.industry = industry;
        this.description = description;
        this.phoneNumber = phoneNumber;
        this.imageUrl =imageUrl;
        this.createdDate = createdDate;
    }
    
    public void setId(Long id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setAddress(String address){
        this.address = address;
    }
    public void setIndustry(String industry){
        this.industry = industry;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }
    public void setCreatedDate(Long createdDate){
        this.createdDate=createdDate;
    }

    public Long getId(){
        return this.id;
    }
    public String getName(){
        return this.name;
    }
    public String getAddress(){
        return this.address;
    }
    public String getIndustry(){
        return this.industry;
    }
    public String getDescription(){
        return this.description;
    }
    public String getPhoneNumber(){
        return this.phoneNumber;
    }
    public String getImageUrl(){
        return this.imageUrl;
    }
    public Long getCreatedDate(){
        return this.createdDate;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", industry='" + industry + '\'' +
                ", description='" + description + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", createdDate=" + createdDate +
                '}';
    }
}


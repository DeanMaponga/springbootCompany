package com.example.companyRegister.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.companyRegister.exception.CompanyNotFoundException;
import com.example.companyRegister.models.Company;
import com.example.companyRegister.repository.CompanyRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CompanyService {
    private final CompanyRepo companyRepo;

    @Autowired
    public CompanyService(CompanyRepo companyRepo) {
        this.companyRepo = companyRepo;
    }

    public Company addCompany(Company company) {
        return companyRepo.save(company);
    }

    public List<Company> findAllCompanies() {
        return companyRepo.findAll();
    }

    public Company updateCompany(Company company) {
        return companyRepo.save(company);
    }

    public Company findCompanyById(Long id) {
        return companyRepo.findCompanyById(id)
                .orElseThrow(() -> new CompanyNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteCompany(Long id){
        companyRepo.deleteCompanyById(id);
    }
}


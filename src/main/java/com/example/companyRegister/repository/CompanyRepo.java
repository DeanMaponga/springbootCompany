package com.example.companyRegister.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.companyRegister.models.Company;

public interface CompanyRepo extends JpaRepository<Company, Long> {
    void deleteCompanyById(Long id);

    Optional<Company> findCompanyById(Long id);
}


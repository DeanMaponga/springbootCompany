package com.example.companyRegister.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.companyRegister.models.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);

    List<Employee> findEmployeeByCompanyUid(Long companyUid);

    List<Employee> findEmployeeByNameContaining(String name);
}


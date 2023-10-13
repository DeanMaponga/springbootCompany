package com.example.companyRegister.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.companyRegister.exception.EmployeeNotFoundException;
import com.example.companyRegister.models.Company;
import com.example.companyRegister.models.Employee;
import com.example.companyRegister.repository.CompanyRepo;
import com.example.companyRegister.repository.EmployeeRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    private final CompanyRepo companyRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo,CompanyRepo companyRepo) {
        this.companyRepo = companyRepo;
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee) {
        Company company = companyRepo.findById(employee.getCompanyUid()).orElse(null);
        employee.setCompany(company);
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        Company company = companyRepo.findById(employee.getCompanyUid()).orElse(null);
        employee.setCompany(company);
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("User by id " + id + " was not found"));
    }

    public List<Employee> findEmployeeByCompanyUid(Long companyUid) {
        return employeeRepo.findEmployeeByCompanyUid(companyUid);
    }

    public List<Employee> findEmployeeByName(String name) {
        return employeeRepo.findEmployeeByNameContaining(name);
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id);
    }
}


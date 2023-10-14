package com.example.companyRegister.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.companyRegister.models.UserAccount;

public interface UserAccountRepo extends JpaRepository<UserAccount, Long> {
    Optional<UserAccount> findUserAccountByEmail(String email);
   
}

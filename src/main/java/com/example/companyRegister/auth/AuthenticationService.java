package com.example.companyRegister.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.companyRegister.config.JwtService;
import com.example.companyRegister.models.Role;
import com.example.companyRegister.models.UserAccount;
import com.example.companyRegister.repository.UserAccountRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final UserAccountRepo userAccountRepo;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    UserAccount user = UserAccount.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
    UserAccount savedUser = userAccountRepo.save(user);
    String jwtToken = jwtService.generateToken(savedUser);
    return AuthenticationResponse.builder().accessToken(jwtToken).build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    UserAccount savedUser = userAccountRepo.findUserAccountByEmail(request.getEmail())
        .orElseThrow();
    String jwtToken = jwtService.generateToken(savedUser);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
        .build();
  }

 

 
}

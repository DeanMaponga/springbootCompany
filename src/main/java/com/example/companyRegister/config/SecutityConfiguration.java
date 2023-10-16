package com.example.companyRegister.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecutityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private static final String[] WHITE_LIST_URL = {"/api/v1/auth/**",};
    RequestMatcher whiteList = new OrRequestMatcher(
            PathRequest.toStaticResources().atCommonLocations(),
            //new AntPathRequestMatcher("/static/**"),
            new AntPathRequestMatcher("/api/v1/auth/**")
    );
    @Bean
     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        /*http
        .csrf()
        .disable()
        .authorizeHttpRequests()
        .requestMatchers(whiteList)
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter,UsernamePasswordAuthenticationFilter.class);*/

        /*http.authorizeRequests()
                .requestMatchers(apiPaths)
                .authenticated()
                .anyRequest()
                .permitAll()
                .and()
                .csrf().disable();*/

        /*RequestMatcher apiPaths = new AntPathRequestMatcher("/api/**");
        http.cors().and()
                .csrf().disable()
                .authorizeRequests()
                .anyRequest().permitAll();

        return http.build();*/

        RequestMatcher whiteList = new OrRequestMatcher(
                PathRequest.toStaticResources().atCommonLocations(),
                new AntPathRequestMatcher("/api/v1/auth/**")
        );

        http.cors().and()
                .csrf().disable()
                .formLogin().disable()
                .securityMatcher("/api/**")
                .authorizeHttpRequests(registry->
                        registry
                                .requestMatchers("/api/**").permitAll()
                                .requestMatchers("/api/v1/**").permitAll()
                                .anyRequest().authenticated());

        return http.build();
     }
}

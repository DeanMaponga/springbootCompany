package com.example.companyRegister;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ui.ModelMap;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.context.request.WebRequestInterceptor;
import org.springframework.web.servlet.HandlerInterceptor;

public class ApiTokenFilter implements HandlerInterceptor{
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
          throws Exception {
    /*if(!isValidApiKey(request)) {
      response.sendError(HttpServletResponse.SC_FORBIDDEN);
      return false;
    }*/
    return true;
  }

  private boolean isValidApiKey(HttpServletRequest request){
    System.out.println(request.getHeader("Authorization"));
    return  request!=null && request.getHeader("Authorization")!=null && request.getHeader("Authorization").equals("Bearer testKey");
  }
}
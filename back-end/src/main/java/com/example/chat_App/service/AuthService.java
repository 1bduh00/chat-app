package com.example.chat_App.service;

import com.example.chat_App.dto.JwtResponse;
import com.example.chat_App.dto.SigninRequest;
import com.example.chat_App.dto.SignupRequest;

public interface AuthService {
    JwtResponse Signin(SigninRequest request);

    JwtResponse Signup(SignupRequest request);
}

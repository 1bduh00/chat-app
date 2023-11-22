package com.example.chat_App.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.chat_App.dto.JwtResponse;
import com.example.chat_App.dto.SigninRequest;
import com.example.chat_App.dto.SignupRequest;
import com.example.chat_App.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> Signin(@RequestBody SigninRequest request) {
        return ResponseEntity.ok(authService.Signin(request));
    }

    @PostMapping("/signup")
    public ResponseEntity<JwtResponse> Signup(@RequestBody SignupRequest request) {
        return ResponseEntity.ok(authService.Signup(request));
    }
}

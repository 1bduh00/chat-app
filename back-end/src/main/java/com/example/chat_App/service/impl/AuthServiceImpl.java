package com.example.chat_App.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.chat_App.dto.JwtResponse;
import com.example.chat_App.dto.SigninRequest;
import com.example.chat_App.dto.SignupRequest;
import com.example.chat_App.models.Role;
import com.example.chat_App.models.User;
import com.example.chat_App.models.userStatus;
import com.example.chat_App.repository.UserRepository;
import com.example.chat_App.service.AuthService;
import com.example.chat_App.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    // private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public JwtResponse Signin(SigninRequest request) {
        // TODO Auto-generated method stub
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("INvalid email or password"));
        var jwt = jwtService.generateToken(user);

        JwtResponse jwtAuthResponse = new JwtResponse();
        jwtAuthResponse.setToken(jwt);

        return jwtAuthResponse;
    }

    @Override
    public JwtResponse Signup(SignupRequest request) {
        // TODO Auto-generated method stub
        boolean exist = userRepository.existsByEmail(request.getEmail());

        if (!exist) {
            User user = new User();
            user.setEmail(request.getEmail());
            user.setFirstname(request.getFirstname());
            user.setLastname(request.getLastname());
            user.setStatus(userStatus.OFFLINE);
            user.setRole(Role.USER);
            user.setPassword(passwordEncoder.encode(request.getPassword()));

            user = userRepository.save(user);
            var jwt = jwtService.generateToken(user);

            JwtResponse jwtAuthResponse = new JwtResponse();
            jwtAuthResponse.setToken(jwt);

            return jwtAuthResponse;
        }
        return null;
    }

}

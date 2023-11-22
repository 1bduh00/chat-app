package com.example.chat_App.dto;

import lombok.Data;

@Data
public class SignupRequest {

    private String firstname;
    private String lastname;
    private String password;
    private String email;
}

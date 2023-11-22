package com.example.chat_App.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name = "chat")
public class Message {
    @Id
    @GeneratedValue
    private Long Id;

    private String message;

    @Temporal(TemporalType.DATE)
    private Date date;

    private Integer sender;

    private Integer reciever;

    private MssgStatus Mstatus;
}

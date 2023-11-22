package com.example.chat_App.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.chat_App.models.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}

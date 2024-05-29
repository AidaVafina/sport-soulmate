package org.example.ssmbackend.chat.repository;

import org.example.ssmbackend.chat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
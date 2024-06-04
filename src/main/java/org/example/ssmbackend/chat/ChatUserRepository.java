package org.example.ssmbackend.chat;

import org.example.ssmbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatUserRepository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);
}
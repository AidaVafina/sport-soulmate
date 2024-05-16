package org.example.ssmbackend.controller;

import org.example.ssmbackend.dto.RegisterUserDto;
import org.example.ssmbackend.entity.User;
import org.example.ssmbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody RegisterUserDto registerUserDto) {
        User user = new User();
        user.setName(registerUserDto.getName());
        user.setEmail(registerUserDto.getEmail());
        user.setPassword(registerUserDto.getPassword()); // Не забывайте хэшировать пароли на практике
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }
}
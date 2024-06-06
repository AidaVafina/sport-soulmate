package org.example.ssmbackend.controller;

import org.example.ssmbackend.entity.User;
import org.example.ssmbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/register")
public class RegistrationController {

    private final UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String showRegPage() {
        return "register";
    }

    @PostMapping
    public String registerUser(@RequestParam String email,
                               @RequestParam String name,
                               @RequestParam String password) {
        if (email != null && !email.isEmpty() && password != null && !password.isEmpty()) {
            User user = new User();
            user.setEmail(email);
            user.setName(name);
            user.setPassword(password);
            user.setRole("ROLE_USER");
            if (userService.saveUser(user)) {
                System.out.println("GOOD");
            } else {
                System.out.println("BAD");
            }
        }
        return "redirect:/main";
    }
}

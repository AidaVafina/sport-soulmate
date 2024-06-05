package org.example.ssmbackend.chat;

import org.example.ssmbackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private ChatUserRepository userRepository;

    @GetMapping("/requests")
    public List<Request> getRequests(@RequestParam String email) {
        return requestRepository.findByTo(email);
    }

    @PostMapping("/requests")
    public ResponseEntity<Request> createRequest(@RequestBody Request request) {
        Request savedRequest = requestRepository.save(request);
        return ResponseEntity.ok(savedRequest);
    }

    @GetMapping("/users")
    public ResponseEntity<Boolean> checkUserExists(@RequestParam String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.status(404).body(false);
        }
    }
}

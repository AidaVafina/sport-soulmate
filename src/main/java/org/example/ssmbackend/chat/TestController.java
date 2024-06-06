package org.example.ssmbackend.chat;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @PostMapping("/requests")
    public ResponseEntity<Request> testCreateRequest() {
        Request testRequest = new Request();
        testRequest.setTo("test@example.com");
        testRequest.setContact("test contact");
        testRequest.setMessage("test message");
        
        return ResponseEntity.ok(testRequest);
    }
}

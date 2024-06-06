package org.example.ssmbackend;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "org.example.ssmbackend")
public class SsmBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SsmBackendApplication.class, args);
    }

}
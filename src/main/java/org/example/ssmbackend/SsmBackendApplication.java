package org.example.ssmbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories(basePackages = "org.example.ssmbackend.chat.repository")
public class SsmBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SsmBackendApplication.class, args);
    }

}

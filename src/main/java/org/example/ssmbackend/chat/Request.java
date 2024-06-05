package org.example.ssmbackend.chat;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Request")
public class Request {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String to;
  private String contact;
  private String message;

}
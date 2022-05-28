package com.cvapp.cvappbackend.user;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String username;
    @NotNull
    private String password;

    private boolean isAdmin;

    private String name;

    private String email;

    private String phoneNumber;

    private String school;

    private String experiences;

    private String skills;

}

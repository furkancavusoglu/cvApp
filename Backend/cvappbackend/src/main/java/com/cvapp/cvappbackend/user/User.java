package com.cvapp.cvappbackend.user;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotNull
    private String username;
    @NotNull
    private String password;

    private boolean isAdmin;

    private String name;

    private String phoneNumber;

    private String school;

    private String experiences;

    private String skills;

}

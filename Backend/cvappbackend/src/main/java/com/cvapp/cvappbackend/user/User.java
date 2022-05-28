package com.cvapp.cvappbackend.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

/*
*   Veritabanında kullanıcıyı temsil eden sınıf
*
* */

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

    // login sayfasından den kullanıcı sayfasına geçemediğim için bu değişkenin bir önemi yok
    private boolean isAdmin;

    private String name;

    private String email;

    private String phoneNumber;

    private String school;

    private String experiences;

    private String skills;

}

package com.cvapp.cvappbackend.user;

import lombok.Data;

// Kullanıcı güncellerken kullanılan sınıf (id, username,password değerlerini tekrar girmemek için)

@Data
public class UserUpdate {

    private boolean isAdmin;

    private String name;

    private String phoneNumber;

    private String school;

    private String experiences;

    private String skills;
}

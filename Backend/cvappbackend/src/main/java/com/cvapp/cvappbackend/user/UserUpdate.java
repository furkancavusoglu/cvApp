package com.cvapp.cvappbackend.user;

import lombok.Data;

@Data
public class UserUpdate {

    private boolean isAdmin;

    private String name;

    private String phoneNumber;

    private String school;

    private String experiences;

    private String skills;
}

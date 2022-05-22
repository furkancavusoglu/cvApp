package com.cvapp.cvappbackend.user;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="USERS")
public class User {


    @Id
    @GeneratedValue
    private long id;

    private String username;

    private String password;

}

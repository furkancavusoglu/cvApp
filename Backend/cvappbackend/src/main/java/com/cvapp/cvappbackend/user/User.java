package com.cvapp.cvappbackend.user;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name="USERS")
public class User {


    @Id
    @GeneratedValue
    private long id;

    @NotNull
    private String username;
    @NotNull
    private String password;

}

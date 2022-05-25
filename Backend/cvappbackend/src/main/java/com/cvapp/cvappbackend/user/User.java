package com.cvapp.cvappbackend.user;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

//    @Type( type = "json" )
//    private HashMap<String,String> cv;
}

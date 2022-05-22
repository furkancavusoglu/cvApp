package com.cvapp.cvappbackend.user;

import com.cvapp.cvappbackend.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/api/1.0/users")
    public GenericResponse createUser(@RequestBody User user){
        userService.save(user);
        return new GenericResponse("user created");
    }
}

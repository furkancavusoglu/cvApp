package com.cvapp.cvappbackend.user;

import com.cvapp.cvappbackend.error.ApiError;
import com.cvapp.cvappbackend.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/api/1.0/users")
    List<User> getUsers(){
        return userService.getUsers();
    }
}

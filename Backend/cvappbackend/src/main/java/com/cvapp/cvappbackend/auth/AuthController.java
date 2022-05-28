package com.cvapp.cvappbackend.auth;

import com.cvapp.cvappbackend.error.ApiError;
import com.cvapp.cvappbackend.user.User;
import com.cvapp.cvappbackend.user.UserRepository;
import org.apache.catalina.authenticator.BasicAuthenticator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/1.0/auth")
    ResponseEntity<?> handleAuthentication(@Valid @RequestBody User user) {
        try {
            User data = userRepository.findByUsername(user.getUsername());
            if (data.getUsername().equals(user.getPassword())) {
                System.out.println("Authentication is a success");
                System.out.println(data.getUsername() + data.getPassword());
                return ResponseEntity.ok().build();
            } else {
                ApiError apiError = new ApiError(400, "Unauthorized request", "/api/1.0/auth");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(apiError);
            }
        } catch (Exception e) {
            ApiError apiError = new ApiError(400, "Unauthorized request", "/api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(apiError);
        }
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError handleValidationException(MethodArgumentNotValidException exception) {
        ApiError apiError = new ApiError(400, "Null value received", "/api/1.0/auth");
        Map<String, String> validationErrors = new HashMap<>();
        for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        apiError.setValidationErrors(validationErrors);
        return apiError;
    }
}

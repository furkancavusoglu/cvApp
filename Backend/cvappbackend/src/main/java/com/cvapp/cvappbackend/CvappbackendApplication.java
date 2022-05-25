package com.cvapp.cvappbackend;

import com.cvapp.cvappbackend.user.User;
import com.cvapp.cvappbackend.user.UserRepository;
import com.cvapp.cvappbackend.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class CvappbackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CvappbackendApplication.class, args);
    }

    @Bean
    CommandLineRunner createInitialUsers(UserService userService) {
        return (args) -> {
            for(int i=0;i<3;i++){
                User user = new User();
                user.setUsername("user"+i);
                user.setPassword("user1");
                userService.save(user);
            }

        };
    }

}

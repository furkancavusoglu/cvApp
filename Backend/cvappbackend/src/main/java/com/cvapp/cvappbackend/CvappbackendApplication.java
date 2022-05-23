package com.cvapp.cvappbackend;

import com.cvapp.cvappbackend.user.User;
import com.cvapp.cvappbackend.user.UserRepository;
import com.cvapp.cvappbackend.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CvappbackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CvappbackendApplication.class, args);
    }

    @Bean
    CommandLineRunner createInitialUsers(UserService userService) {
        return (args) -> {
            User user = new User();
            user.setUsername("user1");
            user.setPassword("user1");
            User user2 = new User();
            user2.setUsername("user2");
            user2.setPassword("user2");
            userService.save(user);
            userService.save(user2);
        };
    }

}

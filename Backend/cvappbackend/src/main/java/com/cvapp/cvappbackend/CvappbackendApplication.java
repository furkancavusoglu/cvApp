package com.cvapp.cvappbackend;

import com.cvapp.cvappbackend.user.User;
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
            for(int i=0;i<3;i++){
                User user = new User();
                user.setUsername("user"+i);
                user.setPassword("user1");
                user.setExperiences("None");
                user.setName("Furkan Cavusoglu");
                user.setPhoneNumber("+905312548");
                user.setSkills("java");
                user.setSchool("Estü");
                user.setEmail("abc@outlook.com");
                user.setAdmin(false);
                userService.save(user);
            }
            User user2 = new User();
            user2.setUsername("admin");
            user2.setPassword("admin");
            user2.setAdmin(true);
            userService.save(user2);
        };
    }

}

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

    //Program başlanıgında kullanıcı üretir.
    @Bean
    CommandLineRunner createInitialUsers(UserService userService) {
        return (args) -> {
            for(int i=1;i<3;i++){
                User user = new User();
                user.setUsername("user"+i);
                user.setPassword("user"+i);
                user.setExperiences("None");
                user.setName("Furkan Cavusoglu");
                user.setPhoneNumber("+905555555555");
                user.setSkills("java");
                user.setSchool("Eskisehir Technical University");
                user.setEmail("abc@outlook.com");
                userService.save(user);
            }
        };
    }

}

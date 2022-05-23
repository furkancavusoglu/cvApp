package com.cvapp.cvappbackend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void save(User user) {
        userRepository.save(user);
    }

//    public User findByUsername(String username){
//        return userRepository.findByUsername(username);
//    }
}

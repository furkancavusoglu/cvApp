package com.cvapp.cvappbackend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    public User updateUser(String username, UserUpdate userUpdate) {
        User inDb = getByUsername(username);
        inDb.setName(userUpdate.getName());
        inDb.setExperiences(userUpdate.getExperiences());
        inDb.setSkills(userUpdate.getSkills());
        inDb.setSchool(userUpdate.getSchool());
        userRepository.save(inDb);
        return inDb;
    }
}
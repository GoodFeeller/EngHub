package com.example.EngHub.service;

import com.example.EngHub.entity.User;
import com.example.EngHub.entity.UserDetailsImpl;
import com.example.EngHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    UserRepository repository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByUsername(username);
        if(user == null) {
            throw new UsernameNotFoundException("Error");
        }
        return new UserDetailsImpl(user);
    }

    public boolean registerUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        if (!repository.existsByUsername(user.getUsername())) {
            repository.save(user);
            return true;
        }
        return false;
    }

    public boolean changePassword(User user) {
        try {
            User dbUser = repository.findByUsername(user.getUsername());
            dbUser.setPassword(encoder.encode(user.getPassword()));
            repository.save(dbUser);
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }

    public String getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    public boolean checkOldPassword(User user) {
        User dbUser = repository.findByUsername(user.getUsername());
        if(!encoder.matches(encoder.encode(user.getPassword()), dbUser.getPassword())) {
            return true;
        }
        return false;
    }

}

package com.example.EngHub.service;



import com.example.EngHub.entity.Theory;
import com.example.EngHub.entity.User;
import com.example.EngHub.repository.TheoryRepos;
import com.example.EngHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class HubService {

    @Autowired
    TheoryRepos theoryRepos;



    public Theory findTheory(String name) {
        return theoryRepos.findTheoryByName(name);
    }

}

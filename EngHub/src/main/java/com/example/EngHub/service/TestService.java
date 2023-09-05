package com.example.EngHub.service;


import com.example.EngHub.entity.Test;
import com.example.EngHub.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {


    @Autowired
    TestRepository repository;

    public Test findTest(String name) {
        return repository.findTestByName(name);
    }
}

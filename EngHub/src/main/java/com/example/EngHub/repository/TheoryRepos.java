package com.example.EngHub.repository;

import com.example.EngHub.entity.Theory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;


public interface TheoryRepos extends JpaRepository<Theory, Long> {
    Theory findTheoryByName(String name);

}

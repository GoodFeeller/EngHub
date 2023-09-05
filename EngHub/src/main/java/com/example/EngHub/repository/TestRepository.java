package com.example.EngHub.repository;

import com.example.EngHub.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;



public interface TestRepository extends JpaRepository<Test, Long> {
    Test findTestByName (String name);
}

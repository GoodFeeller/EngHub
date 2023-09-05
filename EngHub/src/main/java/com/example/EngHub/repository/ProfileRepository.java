package com.example.EngHub.repository;

import com.example.EngHub.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Profile findByUsername(String username);

}

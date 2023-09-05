package com.example.EngHub.service;

import com.example.EngHub.entity.Profile;
import com.example.EngHub.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {


    @Autowired
    ProfileRepository repository;

    public void createProfile(String username) {
        Profile profile = new Profile(username);
        profile.setTests("{}");
        repository.save(profile);
    }

    public boolean delProgress(String username) {
        try{
            Profile profile = repository.findByUsername(username);
            System.out.println(profile.getUsername());
            profile.setTests("{}");
            repository.save(profile);
            System.out.println(profile.getUsername());
            return true;
        }catch (Exception e) {
            return false;
        }

    }

    public boolean writeProgress(String username, int result, String test) {
        try{
            Profile profile = repository.findByUsername(username);
            String tests = profile.getTests();
            int index = tests.indexOf(test);
            if (index == -1) {
                if(tests.length() < 3) {
                    tests = tests.substring(0, tests.length() - 1) + "\"" + test + "\": " + result + "}";
                }else
                tests = tests.substring(0, tests.length() - 1) + ", \"" + test + "\": " + result + "}";
            }
            else  {
                index = tests.indexOf(':', index);
                index += 2;
                int endIndex = tests.indexOf(',', index);
                if(endIndex == -1) endIndex = tests.indexOf('}');
                tests = tests.substring(0, index) + result + tests.substring(endIndex);
            }
            profile.setTests(tests);
            repository.save(profile);
            return true;
        }
        catch (Exception e) {
            return false;
        }

    }

    public Profile getProfile(String username) {
        return repository.findByUsername(username);
    }

    public boolean updateProfile(Profile profile) {
        Profile dbprofile = repository.findByUsername(profile.getUsername());
        if (profile.getName() != "" && profile.getName() != null) dbprofile.setName(profile.getName());
        if (profile.getSurname() != "" && profile.getSurname() != null) dbprofile.setSurname(profile.getSurname());
        if (profile.getUrl() != "" && profile.getUrl() != null) dbprofile.setUrl(profile.getUrl());
        repository.save(dbprofile);
        return true;
    }
}

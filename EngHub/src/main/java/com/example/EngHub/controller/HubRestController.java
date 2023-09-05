package com.example.EngHub.controller;

import com.example.EngHub.entity.*;
import com.example.EngHub.service.HubService;
import com.example.EngHub.service.ProfileService;
import com.example.EngHub.service.TestService;
import com.example.EngHub.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class HubRestController {

    @Autowired
    HubService service;

    @Autowired
    UserService userService;

    @Autowired
    ProfileService profileService;

    @Autowired
    TestService testService;

    @RequestMapping(value = "/getTheme", method = RequestMethod.GET, produces = "application/json")
    public Theory getTheory(@RequestParam(value = "theme", required = false)String theme) {
        return service.findTheory(theme);
    }

    @PostMapping("/registration")
    public ResponseEntity<Object> goRegister(@RequestBody User user) {
        if (userService.registerUser(user)) {
            profileService.createProfile(user.getUsername());
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.status(400).build();
        }
    }

    @PostMapping("/changePassword")
    public ResponseEntity<Object> changePassword(@RequestBody User user) {
        System.out.println(user);
       if (userService.changePassword(user)) {
           return ResponseEntity.ok().build();
       }
       else return ResponseEntity.status(400).build();
    }

    @GetMapping("/getUser")
    public String getUser() {
        return userService.getUser();
    }

    @PostMapping("/checkOldPass")
    public ResponseEntity<Object> checkPassword(@RequestBody User user) {
        if (userService.checkOldPassword(user)) {
            return ResponseEntity.ok().build();
        }
        else return ResponseEntity.status(400).build();
    }

    @PostMapping("/delProgress")
    public ResponseEntity<Object> delProgress(@RequestBody Profile username) {
        if(profileService.delProgress(username.getUsername())) return ResponseEntity.ok().build();
        else return ResponseEntity.status(400).build();
    }

    @RequestMapping(value = "/getTest", method = RequestMethod.GET, produces = "application/json")
    public Test getTest(@RequestParam(value = "number", required = false)String name) {
        return testService.findTest(name);
    }

    @RequestMapping(value = "/getResultInfo", method = RequestMethod.GET, produces = "application/json")
    public Profile getProfile() {
        String username = getUser();
        return profileService.getProfile(username);
    }

    @PostMapping("/writeProgress")
    public ResponseEntity<Object> writeProgress(@RequestBody Result result) {
        if(profileService.writeProgress(result.getUsername(), result.getResult(), result.getTest())) return ResponseEntity.ok().build();
        else return ResponseEntity.status(400).build();
    }

    @PostMapping("/writeProfileData")
    public ResponseEntity<Object> writeProfileData(@RequestBody Profile profile) {
        if (profileService.updateProfile(profile)) {
            return ResponseEntity.ok().build();
        } else return ResponseEntity.status(400).build();
    }
}

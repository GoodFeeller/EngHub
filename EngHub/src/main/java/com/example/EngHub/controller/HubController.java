package com.example.EngHub.controller;

import com.example.EngHub.service.HubService;
import com.example.EngHub.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HubController {

    @Autowired
    HubService service;

    @Autowired
    UserService userService;


    @GetMapping("/")
    public String goMain() {
        return "main";
    }

    @GetMapping("/workplace")
    public String goWork() {return "workplace";}


    @GetMapping("/registration")
    public String registration() {
        return "registration";
    }

    @GetMapping("/theory")
    public String toTheory() {return "theory"; }

    @GetMapping("/login")
    public String toLogin() {return "login";}

    @GetMapping("/settings")
    public String toSettings() {return "settings";}

    @GetMapping("/tests")
    public String toTests() {return "tests";}

    @GetMapping("/profile")
    public String toProfile() {return "profile";}


}

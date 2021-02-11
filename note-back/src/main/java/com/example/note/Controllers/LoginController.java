package com.example.note.Controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = {"http://localhost:8080"})
public class LoginController {

    @RequestMapping(path = "/{userName}/{password}", method = RequestMethod.GET)
    public @ResponseBody String login(@RequestParam("username")String username, @RequestParam("password")String password) {
        System.out.println(username);
        System.out.println(password);
        System.out.println(username.toString());
        return "success";
    }

//    @CrossOrigin(origins = {"http://localhost:8080"})
//    @PostMapping
//    public @ResponseBody String login(@RequestParam("username")String username, @RequestParam("password")String password) {
//        System.out.println(username);
//        System.out.println(password);
//        System.out.println(username.toString());
//        return "success";
//    }
}

package com.example.note.Controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = {"http://localhost:8080"})
public class LoginController {

    @RequestMapping(path = "/{userName}/{password}", method = RequestMethod.POST)
    public @ResponseBody String login(@PathVariable("userName") String userName, @PathVariable("password") String password) {
        System.out.println(userName);
        System.out.println(password);
        return "success";
    }
//    GETの例
//    @GetMapping(path = "/{userName}/{password}")
//    public @ResponseBody String login(@PathVariable("userName") String userName, @PathVariable("password") String password) {
//        System.out.println(userName);
//        System.out.println(password);
//        return "success";
//    }


}

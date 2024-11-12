package com.example.crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/students/add")
public class StudentController {

    @Autowired
    private StudentRepository studentRepositiory;
    
    
    @GetMapping
    public List<Student> getAllUsers(){
        
        return studentRepositiory.findAll();
    }
    
    
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentRepositiory.save(student);
    }
    
    
    
}

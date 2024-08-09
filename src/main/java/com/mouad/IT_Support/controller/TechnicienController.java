package com.mouad.IT_Support.controller;

import com.mouad.IT_Support.model.Technicien;
import com.mouad.IT_Support.service.TechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/techniciens")
public class TechnicienController {

    @Autowired
    TechnicienService technicienService;

    @GetMapping
    public List<Technicien> getAllTechniciens(){
        return technicienService.getTechnicienList();
    }
}

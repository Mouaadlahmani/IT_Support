package com.mouad.IT_Support.controller;

import com.mouad.IT_Support.model.Panne;
import com.mouad.IT_Support.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/panne")
public class PanneController {

    @Autowired
    PanneService panneService;

    @PostMapping("/add")
    public Panne addPanne(@RequestBody Panne panne){
        return panneService.addPanne(panne);
    }

    @GetMapping("/all")
    public List<Panne> getAllPannes(){
        return panneService.getAllPannes();
    }

    @PutMapping("/edit/{id}")
    public Panne editPanne(@PathVariable Long id, @RequestBody Panne panne){
        return panneService.updatePanne(id,panne);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePanne(@PathVariable Long id){
         panneService.deletePanne(id);
    }
}

package com.mouad.IT_Support.controller;

import com.mouad.IT_Support.model.Utilisateur;
import com.mouad.IT_Support.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/utilisateurs")
@CrossOrigin(origins = "http://localhost:4200/")
public class UtilisateurController {

    @Autowired
    UtilisateurService utilisateurService;

    @GetMapping
    public List<Utilisateur> getAllUtilisateurs(){
        return utilisateurService.getAllUtilisateurs();
    }
}

package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Utilisateur;
import com.mouad.IT_Support.repository.UtilisateurRepository;
import com.mouad.IT_Support.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    @Override
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }
}

package com.mouad.IT_Support.repository;

import com.mouad.IT_Support.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
}

package com.mouad.IT_Support.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Utilisateur extends Personne{
    @OneToMany(mappedBy = "utilisateur")
    @JsonIgnore
    private List<Ticket> tickets;
}

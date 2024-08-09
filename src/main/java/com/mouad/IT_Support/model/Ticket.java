package com.mouad.IT_Support.model;


import com.mouad.IT_Support.model.enums.EtatTicket;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketId;
    private String description;
    private LocalDate dateDeCreation;
    @Enumerated(EnumType.STRING)
    private EtatTicket statut;

    @ManyToOne
    @JoinColumn(name = "technicien_id")
    private Technicien technicien;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "equipementId")
    private Equipment equipment;

    @ManyToOne
    @JoinColumn(name = "panneId")
    private Panne panne;

}
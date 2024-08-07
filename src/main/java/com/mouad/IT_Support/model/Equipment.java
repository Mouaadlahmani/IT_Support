package com.mouad.IT_Support.model;

import com.mouad.IT_Support.model.enums.EquipmentStatut;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long equipementId;
    private String name;
    private String description;
    private String imgUrl;
    @Enumerated(EnumType.STRING)
    private EquipmentStatut statut;


    @OneToMany(mappedBy = "equipment")
    private List<HistoriquePanne> historiques;

    @OneToMany(mappedBy = "equipment")
    private List<Ticket> tickets;


}
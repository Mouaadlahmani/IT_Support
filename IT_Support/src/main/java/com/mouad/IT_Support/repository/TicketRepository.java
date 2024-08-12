package com.mouad.IT_Support.repository;

import com.mouad.IT_Support.model.Equipment;
import com.mouad.IT_Support.model.Technicien;
import com.mouad.IT_Support.model.Ticket;
import com.mouad.IT_Support.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findAllByUtilisateur(Utilisateur utilisateur);
    List<Ticket> findAllByTechnicien(Technicien technicien);
    List<Ticket> findAllByEquipment(Equipment equipment);
}



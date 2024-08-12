package com.mouad.IT_Support.service;

import com.mouad.IT_Support.model.Technicien;
import com.mouad.IT_Support.model.Ticket;

import java.util.List;

public interface TicketService {
    Ticket addTicket(Ticket ticket);
    List<Ticket> getAllTickets();
    List<Ticket> findByTechnicien(Long id);
    List<Ticket> findByUtilisateur(Long id);
    List<Ticket> findByEquipment(Long id);
    Ticket assignerTicket(Long id, Ticket ticket);
    Ticket changerStatut(Long id, Ticket ticket);
}

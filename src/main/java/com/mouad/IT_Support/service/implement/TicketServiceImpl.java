package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Technicien;
import com.mouad.IT_Support.model.Ticket;
import com.mouad.IT_Support.model.Utilisateur;
import com.mouad.IT_Support.repository.PersonneRepository;
import com.mouad.IT_Support.repository.TechnicienRepository;
import com.mouad.IT_Support.repository.TicketRepository;
import com.mouad.IT_Support.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    TechnicienRepository technicienRepository;
    @Autowired
    private PersonneRepository personneRepository;

    @Override
    public Ticket addTicket(Ticket ticket) {
        Utilisateur utilisateur = (Utilisateur) personneRepository.findById(ticket.getUtilisateur().getId())
                .orElseThrow(() -> new RuntimeException("Utilisateur not found"));
        ticket.setUtilisateur(utilisateur);
        ticket.setDateDeCreation(LocalDate.now());
        return ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public List<Ticket> findByTechnicien(Long id) {
        Technicien technicien = (Technicien) personneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Technicien not found"));
        List<Ticket> tickets = ticketRepository.findAllByTechnicien(technicien);
        return tickets;
    }

    @Override
    public List<Ticket> findByUtilisateur(Long id) {
        Utilisateur utilisateur = (Utilisateur) personneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur not found"));
        List<Ticket> tickets = ticketRepository.findAllByUtilisateur(utilisateur);
        return tickets;
    }


    @Override
    public Ticket assignerTicket(Long id, Ticket ticket) {
        ticketRepository.findById(id);

        Ticket assignerTicked = new Ticket();

        assignerTicked.setTicketId(id);
        assignerTicked.setUtilisateur(ticket.getUtilisateur());
        assignerTicked.setPanne(ticket.getPanne());
        assignerTicked.setDateDeCreation(ticket.getDateDeCreation());
        assignerTicked.setStatut(ticket.getStatut());
        assignerTicked.setDescription(ticket.getDescription());
        assignerTicked.setEquipment(ticket.getEquipment());
        assignerTicked.setTechnicien(ticket.getTechnicien());


        return ticketRepository.save(assignerTicked);
    }

    @Override
    public Ticket changerStatut(Long id, Ticket ticket) {

        ticketRepository.findById(id);

        Ticket ticketStaut = new Ticket();
        ticketStaut.setTicketId(id);
        ticketStaut.setUtilisateur(ticket.getUtilisateur());
        ticketStaut.setPanne(ticket.getPanne());
        ticketStaut.setDateDeCreation(ticket.getDateDeCreation());
        ticketStaut.setStatut(ticket.getStatut());
        ticketStaut.setDescription(ticket.getDescription());
        ticketStaut.setEquipment(ticket.getEquipment());
        ticketStaut.setTechnicien(ticket.getTechnicien());

        return ticketRepository.save(ticketStaut);
    }
}

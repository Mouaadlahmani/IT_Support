package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Technicien;
import com.mouad.IT_Support.model.Ticket;
import com.mouad.IT_Support.model.Utilisateur;
import com.mouad.IT_Support.model.enums.EtatTicket;
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
        ticket.setStatut(EtatTicket.NOTRAITE);
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

        Ticket assignerTicked = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        Technicien technicien = (Technicien) personneRepository.findById(ticket.getTechnicien().getId())
                .orElseThrow(() -> new RuntimeException("Technicien not found"));
        assignerTicked.setTechnicien(technicien);


        return ticketRepository.save(assignerTicked);
    }

    @Override
    public Ticket changerStatut(Long id, Ticket ticket) {

        Ticket ticketStaut = ticketRepository.findById(id)
                .orElseThrow(() ->new RuntimeException("Ticket not found"));

        ticketStaut.setStatut(ticket.getStatut());

        return ticketRepository.save(ticketStaut);
    }
}

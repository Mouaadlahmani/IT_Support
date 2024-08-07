package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Ticket;
import com.mouad.IT_Support.repository.TicketRepository;
import com.mouad.IT_Support.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketRepository ticketRepository;

    @Override
    public Ticket addTicket(Ticket ticket) {
        ticket.setDateDeCreation(LocalDate.now());
        return ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket assignerTicket(Long id, Ticket ticket) {
        ticketRepository.findById(id);

        Ticket assignerTicked = new Ticket();

        assignerTicked.setTechnicien(ticket.getTechnicien());

        return ticketRepository.save(assignerTicked);
    }
}

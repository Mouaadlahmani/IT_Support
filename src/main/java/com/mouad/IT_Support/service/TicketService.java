package com.mouad.IT_Support.service;

import com.mouad.IT_Support.model.Ticket;

import java.util.List;

public interface TicketService {
    Ticket addTicket(Ticket ticket);
    List<Ticket> getAllTickets();
    Ticket assignerTicket(Long id, Ticket ticket);
}

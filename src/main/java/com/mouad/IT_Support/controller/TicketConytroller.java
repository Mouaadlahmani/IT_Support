package com.mouad.IT_Support.controller;

import com.mouad.IT_Support.model.Ticket;
import com.mouad.IT_Support.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ticket")
public class TicketConytroller {

    @Autowired
    TicketService ticketService;

    @PostMapping("/add")
    public Ticket addTicket(@RequestBody Ticket ticket){
        return ticketService.addTicket(ticket);
    }

    @GetMapping("/all")
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTickets();
    }

    @PutMapping("/assigner/{id}")
    public Ticket assignerTicket(@PathVariable Long id, @RequestBody Ticket ticket){
        return ticketService.assignerTicket(id, ticket);
    }

}

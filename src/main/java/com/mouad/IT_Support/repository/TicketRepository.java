package com.mouad.IT_Support.repository;

import com.mouad.IT_Support.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}

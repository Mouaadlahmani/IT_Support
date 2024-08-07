package com.mouad.IT_Support.service;

import com.mouad.IT_Support.model.Panne;

import java.util.List;

public interface PanneService {
    Panne addPanne(Panne panne);
    Panne updatePanne(Long id, Panne panne);
    void deletePanne(Long id);
    List<Panne> getAllPannes();
}

package com.mouad.IT_Support.service;

import com.mouad.IT_Support.model.Equipment;

import java.util.List;

public interface EquipmentService {
    Equipment addEquipment(Equipment equipment);
    Equipment editEquipment(Long id, Equipment equipment);
    List<Equipment> getAllEquipements();
    void deleteEquipment(Long id);
    Equipment changeEquipmentStatut(Long id, Equipment equipment);
}

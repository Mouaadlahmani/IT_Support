package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Equipment;
import com.mouad.IT_Support.repository.EquipmentRepository;
import com.mouad.IT_Support.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    @Autowired
    EquipmentRepository equipmentRepository;

    @Override
    public Equipment addEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    @Override
    public Equipment editEquipment(Long id, Equipment equipment) {
        equipmentRepository.findById(id);

        Equipment editEquipment = new Equipment();
        editEquipment.setEquipementId(id);
        editEquipment.setName(equipment.getName());
        editEquipment.setDescription(equipment.getDescription());
        editEquipment.setStatut(equipment.getStatut());


        return equipmentRepository.save(editEquipment);
    }

    @Override
    public List<Equipment> getAllEquipements() {
        return equipmentRepository.findAll();
    }

    @Override
    public void deleteEquipment(Long id) {
        equipmentRepository.deleteById(id);
    }
}

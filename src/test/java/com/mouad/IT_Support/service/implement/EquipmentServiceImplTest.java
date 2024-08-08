package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Equipment;
import com.mouad.IT_Support.repository.EquipmentRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class EquipmentServiceImplTest {
    @Mock
    EquipmentRepository equipmentRepository;

    @InjectMocks
    EquipmentServiceImpl equipmentService;

    @Test
    void addEquipment() {

        Equipment equipment = new Equipment();
        equipment.setEquipementId(1L);
        equipment.setName("Equipment 1");

        when(equipmentRepository.save(equipment)).thenReturn(equipment);

        Equipment result = equipmentService.addEquipment(equipment);

        assertNotNull(result);
        assertEquals("Equipment 1", result.getName());

    }

    @Test
    void editEquipment() {
    }

    @Test
    void getAllEquipements() {
        Equipment equipment1 = new Equipment();
        equipment1.setEquipementId(1L);
        equipment1.setName("Equipment1");
        Equipment equipment2 = new Equipment();
        equipment2.setEquipementId(2L);
        equipment2.setName("Equipment2");

        List<Equipment> equipmentList = Arrays.asList(equipment1, equipment2);
        when(equipmentRepository.findAll()).thenReturn(equipmentList);

        List<Equipment> result = equipmentService.getAllEquipements();

        assertEquals(2, result.size());
        assertEquals("Equipment1", result.get(0).getName());
        assertEquals("Equipment2", result.get(1).getName());

    }

    @Test
    void deleteEquipment() {
        Long equipmentId = 1L;
        equipmentService.deleteEquipment(equipmentId);
        verify(equipmentRepository, times(1)).deleteById(equipmentId);
    }
}
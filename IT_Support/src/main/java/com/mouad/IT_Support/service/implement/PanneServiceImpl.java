package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Panne;
import com.mouad.IT_Support.repository.PanneRepository;
import com.mouad.IT_Support.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    PanneRepository panneRepository;

    @Override
    public Panne addPanne(Panne panne) {
        return panneRepository.save(panne);
    }

    @Override
    public Panne updatePanne(Long id, Panne panne) {

        panneRepository.findById(id);

        Panne editedPanne = new Panne();

        editedPanne.setPanneId(id);
        editedPanne.setName(panne.getName());

        return panneRepository.save(editedPanne);
    }

    @Override
    public void deletePanne(Long id) {
        panneRepository.deleteById(id);
    }

    @Override
    public List<Panne> getAllPannes() {
        return panneRepository.findAll();
    }
}

package com.mouad.IT_Support.service.implement;

import com.mouad.IT_Support.model.Technicien;
import com.mouad.IT_Support.repository.TechnicienRepository;
import com.mouad.IT_Support.service.TechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnicienServiceImpl implements TechnicienService {

    @Autowired
    TechnicienRepository technicienRepository;

    @Override
    public List<Technicien> getTechnicienList() {
        return technicienRepository.findAll();
    }
}

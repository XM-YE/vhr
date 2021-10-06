package org.javaboy.vhr.service;

import org.javaboy.vhr.model.Employeetrain;
import org.javaboy.vhr.mapper.EmployeetrainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class PertrainService {
    @Autowired
    EmployeetrainMapper employeetrainMapper;
    public List<Employeetrain> getAllemployeetrain(){
        return employeetrainMapper.getAllemployeetrain();
    }
    public Integer addemployeetrain(Employeetrain employeetrain){
        return employeetrainMapper.insertSelective(employeetrain);
    }
    public Integer deleteemployeetain(Integer id){
        return employeetrainMapper.deleteByPrimaryKey(id);
    }
    public Integer updateemployeetrain(Employeetrain employeetrain){
        return employeetrainMapper.updateByPrimaryKeySelective(employeetrain);
    }
}

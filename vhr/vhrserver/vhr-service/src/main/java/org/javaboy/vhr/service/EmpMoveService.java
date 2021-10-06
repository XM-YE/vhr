package org.javaboy.vhr.service;

import org.javaboy.vhr.model.Employeeremove;
import org.javaboy.vhr.mapper.EmployeeremoveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class EmpMoveService {
    @Autowired
    EmployeeremoveMapper employeeremoveMapper;
    public List<Employeeremove> getAllEmployeeMv(){
        return employeeremoveMapper.getAllEmployeeMv();
    }
    public Integer addEmployeeMv(Employeeremove employeeremove){
        return employeeremoveMapper.insertSelective(employeeremove);
    }
    public Integer deleteeEmployeeMv(Integer id){
        return employeeremoveMapper.deleteByPrimaryKey(id);
    }
    public Integer updateEmployeeMv(Employeeremove employeeremove){
        return employeeremoveMapper.updateByPrimaryKeySelective(employeeremove);
    }
}

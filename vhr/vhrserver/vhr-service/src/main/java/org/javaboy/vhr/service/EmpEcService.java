package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.EmployeeecMapper;
import org.javaboy.vhr.model.Employeeec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class EmpEcService {
          @Autowired
          EmployeeecMapper employeeecMapper;
          public List<Employeeec> getAllEmployeeecs(){
              return employeeecMapper.getAllEmployeeecs();
          }
          public Integer addEmployeeec(Employeeec employeeec){
              employeeec.setEcdate(new Date());
              return employeeecMapper.insertSelective(employeeec);
          }
          public Integer deleteEmployeeecById(Integer id){
              return employeeecMapper.deleteByPrimaryKey(id);
          }
          public Integer updateEmployeeecById(Employeeec employeeec){
              return employeeecMapper.updateByPrimaryKeySelective(employeeec);
          }

}

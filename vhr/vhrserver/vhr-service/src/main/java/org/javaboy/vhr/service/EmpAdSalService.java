package org.javaboy.vhr.service;

import org.javaboy.vhr.model.AdjustSalary;
import org.javaboy.vhr.mapper.AdjustSalaryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;
@Service
public class EmpAdSalService {
    @Autowired
    AdjustSalaryMapper adjustSalaryMapper;
    public List<AdjustSalary> getAllAdjustSalary(){
        return adjustSalaryMapper.getAllAdjustSalary();
    }
    public Integer addAdSalary(AdjustSalary adjustSalary){
        return adjustSalaryMapper.insertSelective(adjustSalary);
    }
    public Integer deleteAdSalaryById(Integer id){
        return adjustSalaryMapper.deleteByPrimaryKey(id);
    }
    public Integer updateAdSalaryById(AdjustSalary adjustSalary){
        return adjustSalaryMapper.updateByPrimaryKeySelective(adjustSalary);
    }
}

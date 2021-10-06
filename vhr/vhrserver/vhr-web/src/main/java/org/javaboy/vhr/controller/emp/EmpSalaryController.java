package org.javaboy.vhr.controller.emp;
import org.javaboy.vhr.model.RespPageBean;
import org.javaboy.vhr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/salary/table")
public class EmpSalaryController {
    @Autowired
   EmployeeService employeeService;
    @GetMapping("/")
    public RespPageBean getEmpSalary(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer size){
    return employeeService.getEmpSalary(page,size);
    }
}

package org.javaboy.vhr.controller.salary;

import org.javaboy.vhr.model.RespPageBean;
import org.javaboy.vhr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/salary/month")
public class SalaryMonthController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("/")
    public RespPageBean getSalaryByMonth(@RequestParam(value = "page",defaultValue = "1") Integer page, @RequestParam(value = "size",defaultValue = "10") Integer size){
        return employeeService.getSalaryByMonth(page, size);
    }
}

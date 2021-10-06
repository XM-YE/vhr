package org.javaboy.vhr.controller.salary;
import org.javaboy.vhr.model.RespPageBean;
import org.javaboy.vhr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/salary/search")
public class SalarySerachController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("/")
    public RespPageBean searchSalaryByDate(@RequestParam(value = "keyword",required = true)String keyword){
        return employeeService.searchSalaryByDate(keyword);
    }
}

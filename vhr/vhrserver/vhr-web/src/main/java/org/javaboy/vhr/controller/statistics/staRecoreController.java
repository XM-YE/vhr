package org.javaboy.vhr.controller.statistics;
import org.javaboy.vhr.model.RespPageBean;
import org.javaboy.vhr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/statistics/record")
public class staRecoreController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("/")
    public RespPageBean selectByDepartment(@RequestParam(value = "keyword",required = true)String keyword){
        return employeeService.selectByDepartment(keyword);
    }
}

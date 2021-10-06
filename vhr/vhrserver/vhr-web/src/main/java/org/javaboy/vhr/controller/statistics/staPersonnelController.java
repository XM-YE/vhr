package org.javaboy.vhr.controller.statistics;
import org.javaboy.vhr.model.RespPageBean;
import org.javaboy.vhr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/statistics/personnel")
public class staPersonnelController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping( "/")
    public RespPageBean selectByPosition(@RequestParam(value = "keyword",required = true) String keyword){
    return employeeService.selectByPosition(keyword);
    }
}

package org.javaboy.vhr.controller.statistics;
import org.javaboy.vhr.service.EmployeeService;
import org.javaboy.vhr.model.RespPageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/statistics/all")
public class staAllController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("/")
    public RespPageBean getStatisticsAll(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer size){
        return employeeService.getStatisticsAll(page,size);
    }
}

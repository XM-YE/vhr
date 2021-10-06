package org.javaboy.vhr.controller.statistics;
import org.javaboy.vhr.model.RespPageBean;
import org.javaboy.vhr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/statistics/score")
public class staScoreController {
    @Autowired
    EmployeeService employeeService;
    @GetMapping("/")
    public RespPageBean getStatisticsScore(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer size){
        return employeeService.getStatisticsScore(page,size);
    }

}

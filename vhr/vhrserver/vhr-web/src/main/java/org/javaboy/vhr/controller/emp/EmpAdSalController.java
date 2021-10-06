package org.javaboy.vhr.controller.emp;


import org.javaboy.vhr.service.EmpAdSalService;
import org.javaboy.vhr.model.AdjustSalary;
import org.javaboy.vhr.model.RespBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personnel/salary")
public class EmpAdSalController {
    @Autowired
    EmpAdSalService empAdSalService;
    @GetMapping("/")
    public List<AdjustSalary> getAllAdjustSalary() {
        return empAdSalService.getAllAdjustSalary();
    }
    @PostMapping("/")
    public RespBean addAdSalary(@RequestBody AdjustSalary adjustSalary){
        if(empAdSalService.addAdSalary(adjustSalary)==1){
            return  RespBean.ok("添加成功！");
        }
        return RespBean.error("添加失败！");
    }

    @DeleteMapping("/{id}")
    public RespBean deleteAdSalary(@PathVariable Integer id) {
        if (empAdSalService.deleteAdSalaryById(id)==1) {
            return RespBean.ok("删除成功！");
        }
        return RespBean.error("删除失败！");
    }
    @PutMapping("/")
    public RespBean updateAdSalary(@RequestBody AdjustSalary adjustSalary) {
        if (empAdSalService.updateAdSalaryById(adjustSalary)==1) {
            return RespBean.ok("更新成功!");
        }
        return RespBean.error("更新失败!");
    }
}


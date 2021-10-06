package org.javaboy.vhr.controller.emp;

import org.javaboy.vhr.model.Employeeec;
import org.javaboy.vhr.model.RespBean;
import org.javaboy.vhr.service.EmpEcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/personnel/ec")
public class EmpEcController {
    @Autowired
    EmpEcService empEcService;
    @GetMapping("/")
    public List<Employeeec> getAllEmployeeecs(){
        return empEcService.getAllEmployeeecs();
    }
    @PostMapping("/")
    public RespBean addEmployeeec(@RequestBody Employeeec employeeec){
        if(empEcService.addEmployeeec(employeeec)==1){
            return  RespBean.ok("添加成功！");
        }
        return RespBean.error("添加失败！");
    }

    @DeleteMapping("/{id}")
    public RespBean deleteEmployeeecById(@PathVariable Integer id) {
        if (empEcService.deleteEmployeeecById(id)==1) {
            return RespBean.ok("删除成功！");
        }
        return RespBean.error("删除失败！");
    }
    @PutMapping("/")
    public RespBean updateEmployeeById(@RequestBody Employeeec employeeec) {
        if (empEcService.updateEmployeeecById(employeeec)==1) {
            return RespBean.ok("更新成功!");
        }
        return RespBean.error("更新失败!");
    }
}

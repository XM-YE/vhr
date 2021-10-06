package org.javaboy.vhr.controller.emp;

import org.javaboy.vhr.service.EmpMoveService;
import org.javaboy.vhr.model.RespBean;
import org.javaboy.vhr.model.Employeeremove;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personnel/remove")
public class EmpMvController {
    @Autowired
  EmpMoveService empMoveService;
    @GetMapping("/")
    public List<Employeeremove> getAllEmployeeMv(){
        return empMoveService.getAllEmployeeMv();
    }
    @PostMapping("/")
    public RespBean addEmployeeMv(@RequestBody Employeeremove employeeremove){
        if(empMoveService.addEmployeeMv(employeeremove)==1){
            return  RespBean.ok("添加成功！");
        }
        return RespBean.error("添加失败！");
    }

    @DeleteMapping("/{id}")
    public RespBean deleteEmployeeMv(@PathVariable Integer id) {
        if (empMoveService.deleteeEmployeeMv(id)==1) {
            return RespBean.ok("删除成功！");
        }
        return RespBean.error("删除失败！");
    }
    @PutMapping("/")
    public RespBean updateEmployeeMv(@RequestBody Employeeremove employeeremove) {
        if (empMoveService.updateEmployeeMv(employeeremove)==1) {
            return RespBean.ok("更新成功!");
        }
        return RespBean.error("更新失败!");
    }
}

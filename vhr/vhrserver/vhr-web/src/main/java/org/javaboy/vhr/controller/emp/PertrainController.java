package org.javaboy.vhr.controller.emp;

import org.javaboy.vhr.service.PertrainService;
import org.javaboy.vhr.model.Employeetrain;
import org.javaboy.vhr.model.RespBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personnel/train")
public class PertrainController {
    @Autowired
    PertrainService pertrainService;
    @GetMapping("/")
    public List<Employeetrain> getAllemplyeetrain(){
        return pertrainService.getAllemployeetrain();
    }
    @PostMapping("/")
    public RespBean addemployeetrain(@RequestBody Employeetrain employeetrain){
        if(pertrainService.addemployeetrain(employeetrain)==1){
            return RespBean.ok("添加成功!");
        }
        return RespBean.error("添加失败!");
    }
    @DeleteMapping("/{id}")
    public RespBean  deleteemployeetain(@PathVariable Integer id){
        if(pertrainService.deleteemployeetain(id)==1){
            return RespBean.ok("删除成功！");
        }
        return RespBean.error("删除失败！");
    }
    @PutMapping("/")
    public RespBean updateemployeetrain(@RequestBody Employeetrain employeetrain){
        if(pertrainService.updateemployeetrain(employeetrain)==1){
            return RespBean.ok("更新成功！");
        }
        return RespBean.error("更新失败！");
    }

}

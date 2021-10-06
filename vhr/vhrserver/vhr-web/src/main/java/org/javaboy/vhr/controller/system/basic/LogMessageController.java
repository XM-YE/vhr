package org.javaboy.vhr.controller.system.basic;
import org.javaboy.vhr.service.HrService;
import org.javaboy.vhr.service.LogMessageService;
import org.javaboy.vhr.model.Hr;
import org.javaboy.vhr.model.RespBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system/log")
public class LogMessageController {
    @Autowired
    HrService hrService;
    @GetMapping("/")
    public List<Hr> getAllLogMessage(){
        return hrService.getAllLogMessage();
    }
    @Autowired
    LogMessageService logMessageService;
    @DeleteMapping("/{hrid}")
    public RespBean deleteByPrimaryKey(@PathVariable Integer hrid){
        if(logMessageService.deleteByPrimaryKey(hrid)==1){
            return RespBean.ok("删除成功！");
        }
        return RespBean.error("删除失败！");
    }

}

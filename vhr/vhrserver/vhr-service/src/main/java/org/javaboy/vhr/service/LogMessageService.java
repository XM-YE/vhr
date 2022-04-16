package org.javaboy.vhr.service;
import org.javaboy.vhr.model.OpLog;
import org.javaboy.vhr.mapper.OpLogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogMessageService {
    @Autowired
    OpLogMapper opLogMapper;
     public Integer deleteByPrimaryKey(Integer hrid){
         return opLogMapper.deleteByPrimaryKey(hrid);
     }
     public int insert(OpLog record){
        return opLogMapper.insert(record);
    }

}



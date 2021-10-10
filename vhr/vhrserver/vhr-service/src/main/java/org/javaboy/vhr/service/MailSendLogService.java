package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.MailSendLogMapper;
import org.javaboy.vhr.model.MailSendLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MailSendLogService {
    @Autowired
    MailSendLogMapper mailSendLogMapper;
    public Integer updateMailSendStatus(String msgId, Integer status){
        return mailSendLogMapper.updateMailSendStatus(msgId,status);
    }
    public Integer insertMailSendLog(MailSendLog mailSendLog){
        return mailSendLogMapper.insertMailSendLog(mailSendLog);
    }
    public List<MailSendLog> getMailSendLogsByStatus(){
        return mailSendLogMapper.getMailSendLogsByStatus();
    }
    public  Integer updateCount(String msgId, Date date){
        return mailSendLogMapper.updateCount(msgId,date);
    }
}

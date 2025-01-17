package org.javaboy.vhr.task;

import org.javaboy.vhr.model.Employee;
import org.javaboy.vhr.model.MailConstants;
import org.javaboy.vhr.model.MailSendLog;
import org.javaboy.vhr.service.EmployeeService;
import org.javaboy.vhr.service.MailSendLogService;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Component
public class MailSendTask {
    @Autowired
    MailSendLogService mailSendLogService;
    @Autowired
    RabbitTemplate rabbitTemplate;
    @Autowired
    EmployeeService employeeService;
    @Scheduled(cron = "0/10 * * * * ?")
    /*
     *对status=0 即消息投递中的记录进行定时任务重发，重发超过三次即max_send_count=3判定为失败，调用服务更新状态status=2
     */
    public void MailResendTask(){
        List<MailSendLog> logs=mailSendLogService.getMailSendLogsByStatus();
        if(logs==null||logs.size()==0){
            return;
        }
        logs.forEach(mailSendLog->{
            if (mailSendLog.getCount()>=3 && mailSendLog.getStatus()==0){
                mailSendLogService.updateMailSendStatus(mailSendLog.getMsgId(),2);
            }else {
                mailSendLogService.updateCount(mailSendLog.getMsgId(),new Date());
                Employee emp=employeeService.getEmployeeById(mailSendLog.getEmpId());
                rabbitTemplate.convertAndSend(MailConstants.MAIL_EXCHANGE_NAME,MailConstants.MAIL_ROUTINGKEY_NAME,emp,new CorrelationData(mailSendLog.getMsgId()));
            }
        });

    }
}

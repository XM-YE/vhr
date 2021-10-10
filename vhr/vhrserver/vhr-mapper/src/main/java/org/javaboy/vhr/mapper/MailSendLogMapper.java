package org.javaboy.vhr.mapper;

import org.apache.ibatis.annotations.Param;
import org.javaboy.vhr.model.MailSendLog;

import java.util.Date;
import java.util.List;

public interface MailSendLogMapper {
    Integer updateMailSendStatus(@Param("msgId")String msgId,@Param("status")Integer status);
    Integer insertMailSendLog(MailSendLog mailSendLog);
    List<MailSendLog> getMailSendLogsByStatus();
    Integer updateCount(@Param("msgId")String masId, @Param("date")Date date);
}

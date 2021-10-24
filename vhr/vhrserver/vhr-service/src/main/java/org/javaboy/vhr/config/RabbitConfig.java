package org.javaboy.vhr.config;

import org.javaboy.vhr.model.MailConstants;
import org.javaboy.vhr.service.MailSendLogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    public final static Logger logger= LoggerFactory.getLogger(RabbitConfig.class);
    @Autowired
    CachingConnectionFactory cachingConnectionFactory;
    @Autowired
    MailSendLogService mailSendLogService;
    @Bean
    RabbitTemplate rabbitTemplate(){
        RabbitTemplate rabbitTemplate=new RabbitTemplate(cachingConnectionFactory);
        rabbitTemplate.setConfirmCallback((data, ack, cause) -> {
            String msgId=data.getId();
            if(ack){
                /*
                 *ack回执成功，调用服务，更新消息发送状态：0消息投递 1发送成功 2发送失败
                 */
                logger.info(msgId+":消息发送成功！");
                mailSendLogService.updateMailSendStatus(msgId,1);
            }else {
                logger.info(msgId+":消息发送失败！");
                logger.info("失败原因:"+cause);
            }
        });
        rabbitTemplate.setReturnsCallback((msgId)->{
            logger.info("消息发送失败！"+msgId);
        });
        /*
        rabbitTemplate.setReturnCallback((msgId,repCode,repText,exchange,routingKey)->{
            logger.info("消息发送失败！");
        });*/
        return rabbitTemplate;
    }
    @Bean
    Queue mailQueue(){
        return new Queue(MailConstants.MAIL_QUEUE_NAME,true);
    }
    @Bean
    DirectExchange mailExchange(){
        return new DirectExchange(MailConstants.MAIL_EXCHANGE_NAME,true,false);
    }
    @Bean
    Binding mailBinding(){
        return BindingBuilder.bind(mailQueue()).to(mailExchange()).with(MailConstants.MAIL_ROUTINGKEY_NAME);
    }
}

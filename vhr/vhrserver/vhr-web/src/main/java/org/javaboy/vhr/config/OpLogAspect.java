package org.javaboy.vhr.config;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.javaboy.vhr.model.OpLog;
import org.javaboy.vhr.service.LogMessageService;
import org.javaboy.vhr.utils.HrUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Date;

@Aspect
@Component
public class OpLogAspect {
    @Autowired
    LogMessageService logMessageService;
    @Pointcut("@annotation(org.javaboy.vhr.config.OpLogConfig)")
    public void operationlog(){ }
    @AfterReturning("operationlog()")
    public void addOpLog(JoinPoint joinPoint) throws Exception{
        OpLog opLog=new OpLog();
        MethodSignature signature=(MethodSignature)joinPoint.getSignature();
        Method method=signature.getMethod();
        OpLogConfig opLogConfig=method.getAnnotation(OpLogConfig.class);
        if(opLogConfig!=null){
            String value=opLogConfig.value();
            opLog.setOperate(value);
        }
        String className=joinPoint.getTarget().getClass().getName();
        String methodName=method.getName();
        opLog.setOperatemethod(className+"."+methodName);
        opLog.setAdddate(new Date());
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            opLog.setHrname(authentication.getName());
            opLog.setHrid(HrUtils.getCurrentHr().getId());
        }
        logMessageService.insert(opLog);
    }

}

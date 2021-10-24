package org.javaboy.vhr.service;

import org.apache.ibatis.annotations.Param;
import org.javaboy.vhr.mapper.EmployeeMapper;
import org.javaboy.vhr.model.Employee;
import org.javaboy.vhr.model.MailConstants;
import org.javaboy.vhr.model.MailSendLog;
import org.javaboy.vhr.model.RespPageBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    @Autowired
    EmployeeMapper employeeMapper;
    @Autowired
    RabbitTemplate rabbitTemplate;
    @Autowired
    MailSendLogService mailSendLogService;
    public final static Logger logger = LoggerFactory.getLogger(EmployeeService.class);
    //public List<Employee> getEmpSalary(){return employeeMapper.getEmpSalary();}
   //public List<Employee> getSalaryByMonth(){return employeeMapper.getSalaryByMonth();}

    SimpleDateFormat yearFormat = new SimpleDateFormat("yyyy");
    SimpleDateFormat monthFormat = new SimpleDateFormat("MM");
    DecimalFormat decimalFormat = new DecimalFormat("##.00");
    public RespPageBean getEmployeeByPage(Integer page, Integer size, Employee employee,Date[] beginDateScope) {
        if (page != null && size != null) {
            page = (page - 1) * size;
        }
        List<Employee> data = employeeMapper.getEmployeeByPage(page, size, employee,beginDateScope);
        Long total = employeeMapper.getTotal(employee,beginDateScope);
        RespPageBean bean = new RespPageBean();
        bean.setData(data);
        bean.setTotal(total);
        return bean;
    }
    public Integer addEmp(Employee employee) {
        Date beginContract = employee.getBeginContract();
        Date endContract = employee.getEndContract();
        double month = (Double.parseDouble(yearFormat.format(endContract)) - Double.parseDouble(yearFormat.format(beginContract))) * 12 + (Double.parseDouble(monthFormat.format(endContract)) - Double.parseDouble(monthFormat.format(beginContract)));
        employee.setContractTerm(Double.parseDouble(decimalFormat.format(month / 12)));
        int result = employeeMapper.insertSelective(employee);
        /*
         *当新增一个employee成功，rabbitTemplate发布消息
         * @rabbitListener在mailService监听到队列javaboy.mail.welcome
         * 获取到新添加employee的邮箱地址，初始化并发送邮件
         */
        if (result == 1) {
            Employee emp = employeeMapper.getEmployeeById(employee.getId());
            String msgId= UUID.randomUUID().toString();
            MailSendLog mailSendLog=new MailSendLog();
            mailSendLog.setMsgId(msgId);
            mailSendLog.setCreateTime(new Date());
            mailSendLog.setExchange(MailConstants.MAIL_EXCHANGE_NAME);
            mailSendLog.setRouteKey(MailConstants.MAIL_ROUTINGKEY_NAME);
            mailSendLog.setEmpId(emp.getId());
            mailSendLog.setTryTime(new Date(System.currentTimeMillis()+1000*60*MailConstants.MSG_TIMEOUT));
            mailSendLogService.insertMailSendLog(mailSendLog);
            logger.info(emp.toString());
            rabbitTemplate.convertAndSend(MailConstants.MAIL_EXCHANGE_NAME,MailConstants.MAIL_ROUTINGKEY_NAME,emp,new CorrelationData(mailSendLog.getMsgId()));
        }
        return result;
    }

    public Integer maxWorkID() {
        return employeeMapper.maxWorkID();
    }

    public Integer deleteEmpByEid(Integer id) {
        return employeeMapper.deleteByPrimaryKey(id);
    }

    public Integer updateEmp(Employee employee) {
        return employeeMapper.updateByPrimaryKeySelective(employee);
    }

    public Integer addEmps(List<Employee> list) {
        return employeeMapper.addEmps(list);
    }

    public RespPageBean getEmployeeByPageWithSalary(Integer page, Integer size) {
        if (page != null && size != null) {
            page = (page - 1) * size;
        }
        List<Employee> list = employeeMapper.getEmployeeByPageWithSalary(page, size);
        RespPageBean respPageBean = new RespPageBean();
        respPageBean.setData(list);
        respPageBean.setTotal(employeeMapper.getTotal(null, null));
        return respPageBean;
    }
    public RespPageBean getSalaryByMonth(Integer page, Integer size){
        if (page != null && size != null) {
            page = (page - 1) * size;
        }
        List<Employee> data=employeeMapper.getSalaryByMonth(page, size);
        RespPageBean respPageBean = new RespPageBean();
        respPageBean.setData(data);
        respPageBean.setTotal(employeeMapper.getTotal(null,null));
        return respPageBean;
    }
    public RespPageBean getEmpSalary(Integer page, Integer size){
        if (page != null && size != null) {
            page =  (page - 1) * size;
        }
        List<Employee> data=employeeMapper.getEmpSalary(page, size);
        RespPageBean respPageBean = new RespPageBean();
        respPageBean.setData(data);
        respPageBean.setTotal(employeeMapper.getTotal(null,null));
        return respPageBean;
    }
    public RespPageBean getStatisticsAll(Integer page,Integer size){
        if (page != null && size != null) {
            page =  (page - 1) * size;
        }
        List<Employee> data=employeeMapper.getStatisticsAll(page,size);
        RespPageBean respPageBean=new RespPageBean();
        respPageBean.setData(data);
        respPageBean.setTotal(employeeMapper.getTotal(null,null));
        return respPageBean;
    }
    public RespPageBean getStatisticsScore(Integer page,Integer size){
        if (page != null && size != null) {
            page =  (page - 1) * size;
        }
        List<Employee>data=employeeMapper.getStatisticsScore(page,size);
        RespPageBean respPageBean=new RespPageBean();
        respPageBean.setData(data);
        respPageBean.setTotal(employeeMapper.getTotal(null,null));
        return respPageBean;
    }
    public  RespPageBean selectByPosition(String keyword){
        List<Employee> data=employeeMapper.selectByPosition(keyword);
        RespPageBean respPageBean=new RespPageBean();
        respPageBean.setData(data);
        respPageBean.setTotal(employeeMapper.getTotal(null,null));
        return respPageBean;
    }
    public RespPageBean selectByDepartment(String keyword){
        List<Employee> data=employeeMapper.selectByDepartment(keyword);
        RespPageBean respPageBean=new RespPageBean();
        respPageBean.setData(data);
        respPageBean.setTotal(employeeMapper.getTotal(null,null));
        return respPageBean;
    }
    public RespPageBean searchSalaryByDate(String keyword){
        List<Employee> data=employeeMapper.searchSalaryByDate(keyword);
        RespPageBean respPageBean=new RespPageBean();
        respPageBean.setData(data);
        return respPageBean;
    }
    public Integer updateEmployeeSalaryById(Integer eid, Integer sid) {
        return employeeMapper.updateEmployeeSalaryById(eid,sid);
    }
    public Employee getEmployeeById(Integer empId){
        return employeeMapper.getEmployeeById(empId);
    }
}

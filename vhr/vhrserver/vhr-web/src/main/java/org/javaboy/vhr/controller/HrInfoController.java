package org.javaboy.vhr.controller;

import org.javaboy.vhr.config.FastDFSUtils;
import org.javaboy.vhr.model.Hr;
import org.javaboy.vhr.model.RespBean;
import org.javaboy.vhr.service.HrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
public class HrInfoController {
    @Autowired
    HrService hrService;
    //从配置properties文件中读取值
    @Value("${fastdfs.nginx.host}")
    String nginxHost;

    @GetMapping("/hr/info")
    public Hr getConcurenHr(Authentication authentication){
        return ((Hr)authentication.getPrincipal());
    }
    @PutMapping("/hr/info")
    public RespBean updateHr(@RequestBody Hr hr,Authentication authentication){
        if(hrService.updateHr(hr)==1){
            SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(hr,authentication.getCredentials(),authentication.getAuthorities()));
            return RespBean.ok("更新成功！");
        }
        return RespBean.error("更新失败！");
    }
    @PutMapping("/hr/pass")
    public RespBean updatePassword(@RequestBody Map<String,Object> info){
        String oldpass=(String)info.get("oldpass");
        String pass=(String)info.get("pass");
        Integer hrid=(Integer)info.get("hrid");
        if (hrService.updateHrPasswd(oldpass,pass,hrid)){
            return RespBean.ok("更新成功！");
        }
        return RespBean.error("更新失败！");
    }
    @PostMapping("/hr/userface")
    public RespBean updateUserFace(MultipartFile multipartFile,Integer id,Authentication authentication){
        //MultipartFile是spring类型，代表HTML中form data方式上传的文件，包含二进制数据+文件名称
        String fileid= FastDFSUtils.upload(multipartFile);
        String url=nginxHost+fileid;
        if(hrService.updateUserface(url,id)==1){
            Hr hr=(Hr)authentication.getPrincipal();
            hr.setUserface(url);
            SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(authentication.getCredentials(),authentication.getAuthorities()));
            return RespBean.ok("更新成功！");
        }
        return RespBean.error("更新失败！");
    }
}

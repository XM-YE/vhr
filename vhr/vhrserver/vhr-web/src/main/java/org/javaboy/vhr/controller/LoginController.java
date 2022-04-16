package org.javaboy.vhr.controller;

import org.javaboy.vhr.config.VerifycationCode;
import org.javaboy.vhr.model.RespBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.IOException;


@RestController
public class LoginController {
    @GetMapping("/login")
    public RespBean login() {
        return RespBean.error("尚未登录，请登录!");
    }
    @GetMapping("/verifyCode")
    public void verifyCode(HttpServletRequest request, HttpServletResponse  resp)throws IOException{
        VerifycationCode verifycationCode=new VerifycationCode();
        BufferedImage image=verifycationCode.getImage();
        String text=verifycationCode.getText();
        HttpSession session=request.getSession(true);
        session.setAttribute("verify_code",text);
        VerifycationCode.output(image,resp.getOutputStream());
    }
}


package org.javaboy.vhr.config;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

public class VerifycationCode {
    private int width = 100;
    private int height = 30;
    private String[] fontName = {"宋体", "楷体", "隶书", "微软雅黑"};
    private Color bgColor = new Color(255, 255, 255);
    private Random random = new Random();
    private String codes = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@!%*&~";
    private String text;

    private Color RandomColor() {
        int red = random.nextInt(150);
        int green = random.nextInt(150);
        int blue = random.nextInt(150);
        return new Color(red, green, blue);
    }

    private Font RandomFontName() {
        String fontname = fontName[random.nextInt(fontName.length)];
        int style = random.nextInt(4);
        int size = random.nextInt(5) + 24;
        return new Font(fontname, style, size);
    }

    private char RandomChar() {
        return codes.charAt(random.nextInt(codes.length()));
    }

    private BufferedImage createImage() {
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics2D = (Graphics2D) image.getGraphics();
        graphics2D.setBackground(bgColor);
        graphics2D.fillRect(0, 0, width, height);
        return image;
    }
    public BufferedImage getImage(){
        BufferedImage bufferedImage=createImage();
        Graphics2D graphics2D=(Graphics2D) bufferedImage.getGraphics();
        StringBuffer sb=new StringBuffer();
        for(int i=0;i<4;i++){
            String s=RandomChar()+"";
            sb.append(s);
            graphics2D.setColor(RandomColor());
            graphics2D.setFont(RandomFontName());
            float x=i*width*1.0f/4;
            //绘图
            graphics2D.drawString(s,x,height-8);
        }
        this.text=sb.toString();
        drawLine(bufferedImage);
        return bufferedImage;
    }
    private void drawLine(BufferedImage image) {
        Graphics2D g2 = (Graphics2D) image.getGraphics();
        int num = 5;
        for (int i = 0; i < num; i++) {
            int x1 = random.nextInt(width);
            int y1 = random.nextInt(height);
            int x2 = random.nextInt(width);
            int y2 = random.nextInt(height);
            g2.setColor(RandomColor());
            g2.setStroke(new BasicStroke(1.5f));
            g2.drawLine(x1, y1, x2, y2);
        }
    }
    public String getText() {
        return text;
    }

    public static void output(BufferedImage image, OutputStream out) throws IOException {
        ImageIO.write(image, "JPEG", out);
    }
}


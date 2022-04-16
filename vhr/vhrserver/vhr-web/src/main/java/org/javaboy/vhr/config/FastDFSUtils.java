package org.javaboy.vhr.config;

import org.csource.common.MyException;
import org.csource.fastdfs.ClientGlobal;
import org.csource.fastdfs.StorageClient1;
import org.csource.fastdfs.TrackerClient;
import org.csource.fastdfs.TrackerServer;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class FastDFSUtils {
    /*
     *文件服务器整合
     */
    public static StorageClient1 client1;
    static {
        try {
            ClientGlobal.initByProperties("fastdfs-client.properties");
            TrackerClient trackerClient=new TrackerClient();
            TrackerServer trackerServer=trackerClient.getConnection();
            client1=new StorageClient1(trackerServer,null);
        }catch (IOException | MyException e){
            e.printStackTrace();
        }
    }
    public static String upload(MultipartFile multipartFile){
        String oldName=multipartFile.getOriginalFilename();
        try {
            /*
             *截取文件名.之前的元素
             */
            return client1.upload_file1(multipartFile.getBytes(),oldName.substring(oldName.lastIndexOf(".")+1),null);
        }catch (IOException | MyException e){
            e.printStackTrace();
        }
        return null;
    }

}

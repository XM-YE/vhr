package org.javaboy.vhr.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.util.List;

public class OpLog {
    private Integer id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "Asia/Shanghai")
    private Date adddate;
    private String operate;
    private Integer hrid;
    private String hrname;
    private String operatemethod;
    public String getHrname() {
        return hrname;
    }

    public void setHrname(String hrname) {
        this.hrname = hrname;
    }

    public String getOperatemethod() {
        return operatemethod;
    }

    public void setOperatemethod(String operatemethod) {
        this.operatemethod = operatemethod;
    }


    /*
    private Hr hr;
    public Hr getHr() { return hr; }

    public void setHr(Hr hr) { this.hr = hr; }
    */
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getAdddate() {
        return adddate;
    }

    public void setAdddate(Date adddate) {
        this.adddate = adddate;
    }

    public String getOperate() {
        return operate;
    }

    public void setOperate(String operate) {
        this.operate = operate == null ? null : operate.trim();
    }

    public Integer getHrid() {
        return hrid;
    }

    public void setHrid(Integer hrid) {
        this.hrid = hrid;
    }
}
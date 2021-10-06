package org.javaboy.vhr.model;

public class EmpSalary {
    private Integer id;
    private Integer eid;
    private Integer sid;
    private String empname;
    private Integer workid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEid() {
        return eid;
    }

    public void setEid(Integer eid) {
        this.eid = eid;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getEmpname() { return empname; }

    public void setEmpname(String empname) { this.empname = empname; }

    public Integer getWorkid() { return workid; }

    public void setWorkid(Integer worlid) { this.workid = worlid; }
}
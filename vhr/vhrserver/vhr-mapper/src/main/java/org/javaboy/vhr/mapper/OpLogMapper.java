package org.javaboy.vhr.mapper;

import org.apache.ibatis.annotations.Param;
import org.javaboy.vhr.model.Employee;
import org.javaboy.vhr.model.OpLog;

import java.util.Date;
import java.util.List;

public interface OpLogMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(OpLog record);

    int insertSelective(OpLog record);

    OpLog selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(OpLog record);

    int updateByPrimaryKey(OpLog record);

    List<OpLog>getAllLogMessage(@Param("page")Integer page,@Param("size")Integer size,@Param("oplog") OpLog oplog);

    Long getTotal(@Param("oplog") OpLog oplog);
}
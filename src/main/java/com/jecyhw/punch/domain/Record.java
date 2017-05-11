package com.jecyhw.punch.domain;

import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by jecyhw on 1/9/2017.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Record {

    /**
     * checkResult : true
     * ext1 :
     * ext2 :
     * id : 73770
     * indbTime : 2017-01-09 20:14:10
     * jingdu : 116.3293553
     * type : checkout
     * uemail : yanghuiwei@cnic.cn
     * uname : 杨慧伟
     * weidu : 39.9794
     * workPlace :
     */

    private Boolean checkResult;
    private String ext1;
    private String ext2;
    private int id;
    private String indbTime;
    private String jingdu;
    private String type;
    private String uemail;
    private String uname;
    private String weidu;
    private String workPlace;

}

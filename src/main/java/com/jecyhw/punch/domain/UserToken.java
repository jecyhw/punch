package com.jecyhw.punch.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Created by jecyhw on 17-1-2.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserToken {
    private String uname;
    private  String uemail;
    private String token;
    private String refreshToken;
}

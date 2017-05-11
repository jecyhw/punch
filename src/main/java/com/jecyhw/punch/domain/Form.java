package com.jecyhw.punch.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by jecyhw on 17-1-2.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Form {
    private String userName;
    private String password;
    private Double longitude;
    private Double latitude;
    private String type;
    private String token;
    private Boolean autoWork;
    private Boolean sendEmail = true;
}

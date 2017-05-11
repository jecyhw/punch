package com.jecyhw.punch.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Created by jecyhw on 2017/4/17.
 */
@Entity
@Table(name = "user", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(unique = true)
    private String email;

    @JsonIgnore
    private String pwd;

    @Column(name = "auto_work")
    private Boolean autoWork = true;

    @Column(name = "send_email")
    private Boolean sendEmail = true;

    @JsonIgnore
    @Transient
    private Long sendTimeStamp;

    @JsonIgnore
    @Transient
    private Boolean onWork;
}

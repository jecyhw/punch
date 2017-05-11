package com.jecyhw.punch.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by jecyhw on 2017/4/19.
 */
@Entity
@Table(name = "work_day", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkDay {
    @Id
    private Integer day;
}

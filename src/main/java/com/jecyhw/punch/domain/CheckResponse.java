package com.jecyhw.punch.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Created by jecyhw on 1/9/2017.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CheckResponse {
    private Boolean success;
    private String errorMessage;
    private List<Record> records;
}

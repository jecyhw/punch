package com.jecyhw.punch;


import com.jecyhw.punch.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by jecyhw on 16-11-7.
 */
@ControllerAdvice
public class GlobalControllerAdvice {

    @ResponseBody
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Response<?>> exception(Exception e) {
        return new ResponseEntity<>(Response.fail(e.getMessage()), HttpStatus.OK);
    }
}

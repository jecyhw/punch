package com.jecyhw.punch;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;


@Component
@ConfigurationProperties(prefix = "punch.server")
@Setter
@Getter
@Order(value = 0)
public class ServerProperties {
    private String host;
}

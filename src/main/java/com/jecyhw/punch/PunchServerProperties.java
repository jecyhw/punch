package com.jecyhw.punch;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;


@Component
@ConfigurationProperties(prefix = "punch.server")
@Setter
@Getter
public class PunchServerProperties {
    private String host;
}

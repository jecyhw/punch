package com.jecyhw.punch.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jecyhw.punch.domain.*;
import com.jecyhw.punch.repository.UserRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

/**
 * Created by jecyhw on 2017/4/17.
 */
@Service
public class PunchService {

    @Autowired
    private UserRepository userRepository;
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    static private final Logger logger = LoggerFactory.getLogger(PunchService.class);

    @Autowired
    public PunchService(HttpMessageConverters messageConverters) {
        this.restTemplate = new RestTemplate(messageConverters.getConverters());
        objectMapper = new ObjectMapper();
    }


    public CheckResponse check(Form form) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString("http://159.226.29.10/CnicCheck/CheckServlet")
                .queryParam("weidu", form.getLatitude())
                .queryParam("jingdu", form.getLongitude())
                .queryParam("type", form.getType())
                .queryParam("token", form.getToken())
                .queryParam("tm", System.nanoTime());
        ResponseEntity<String> response = restTemplate.exchange(builder.build().toUri(), HttpMethod.GET, null, String.class);
        try {
            return objectMapper.readValue(response.getBody(), CheckResponse.class);
        } catch (IOException e) {
            throw new RuntimeException(response.getBody());
        }
    }

    public List<Record> list(Form form) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString("http://159.226.29.10/CnicCheck/CheckInfoServlet")
                .queryParam("token", form.getToken())
                .queryParam("tm", System.nanoTime());
        ResponseEntity<String> response = restTemplate.exchange(builder.build().toUri(), HttpMethod.GET, null, String.class);
        List<Record> records;
        try {
            records = objectMapper.readValue(response.getBody(), new TypeReference<List<Record>>() {});
        } catch (Exception e) {
            try {
                CheckResponse checkResponse = objectMapper.readValue(response.getBody(), CheckResponse.class);
                throw new RuntimeException(checkResponse.getErrorMessage());
            } catch (IOException e1) {
                throw new RuntimeException(response.getBody());
            }
        }
        return records;
    }

    public UserToken singIn(Form form) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString("https://passport.escience.cn/oauth2/authorize")
                .queryParam("response_type", "code")
                .queryParam("redirect_uri", "http://159.226.29.10/CnicCheck/testtoken")
                .queryParam("client_id", "58861")
                .queryParam("theme", "simple")
                .queryParam("pageinfo", "userinfo")
                .queryParam("tm", System.nanoTime());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
        map.add("userName", form.getUserName());
        map.add("password", form.getPassword());

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(builder.build().toUri(), request, String.class);
        try {
            URI uri = response.getHeaders().getLocation();
            response = restTemplate.getForEntity(uri, String.class);
            UserToken userToken = objectMapper.readValue(response.getBody(), UserToken.class);
            logger.info(form.getUserName() + " " + userToken.getUname());
            return userToken;
        } catch (Exception e) {
            Document document = Jsoup.parse(response.getBody());
            Elements elements = document.select(".error.help-inline, div.errorText");
            StringBuilder stringBuilder = new StringBuilder();
            for (Element element : elements) {
                if (StringUtils.hasText(element.text())) {
                    if (stringBuilder.length() > 0) {
                        stringBuilder.append("\r\n");
                    }
                    stringBuilder.append(element.text().trim());
                }
            }
            throw new RuntimeException(stringBuilder.toString());
        }
    }

    public Boolean autoWork(User user) {
        User findUser = userRepository.findByEmail(user.getEmail());
        if (findUser != null) {
            user.setId(findUser.getId());
        }
        userRepository.save(user);
        return true;
    }

    public String healthCheck() {
        try {
            ResponseEntity<String> responseEntity = restTemplate.getForEntity("https://punch-cnic.herokuapp.com/health/check", String.class);
            if (responseEntity.getStatusCode().equals(HttpStatus.OK)) {
                return responseEntity.getBody();
            }
        } catch (Exception e) {

        }
        return restTemplate.getForObject("https://punch-cnic-1.herokuapp.com/health/check", String.class);
    }
}

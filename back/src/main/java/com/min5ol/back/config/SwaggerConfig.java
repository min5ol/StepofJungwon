package com.min5ol.back.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

  @Bean
  public OpenAPI customOpenAPI() {
      return new OpenAPI()
              .info(new Info()
                      .title("Yangflix API")
                      .version("v1")
                      .description("Yangflix API Documentation")
                      .contact(new io.swagger.v3.oas.models.info.Contact()
                              .name("min5ol")
                              .email("sol0508@kakao.com"))
                      .license(new License()
                              .name("MIT License")
                              .url("https://opensource.org/licenses/MIT")));
  }
}

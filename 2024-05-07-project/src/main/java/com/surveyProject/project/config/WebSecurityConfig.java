package com.surveyProject.project.config;

//import com.surveyProject.project.handler.Oauth2SuccessHandler;
import com.surveyProject.project.handler.Oauth2SuccessHandler;
import com.surveyProject.project.provider.JwtAuthenticationFilter;
import com.surveyProject.project.provider.JwtProvider;
import com.surveyProject.project.service.survey.Oauth2UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.io.IOException;
import java.util.Collections;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final Oauth2UserService oauth2UserService;
        private final Oauth2SuccessHandler oauth2SuccessHandler;
        private final JwtProvider jwtProvider;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception{
        httpSecurity.cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() {

            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                CorsConfiguration configuration = new CorsConfiguration();

                configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
                configuration.setAllowedMethods(Collections.singletonList("*"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedHeaders(Collections.singletonList("*"));
                configuration.setMaxAge(3600L);

                configuration.setExposedHeaders(Collections.singletonList("Set-Cookie"));
                configuration.setExposedHeaders(Collections.singletonList("Authorization"));

                return configuration;
            }
        }));
//                .cors((cors)->cors.disable())
                httpSecurity.csrf((csrf)->csrf.disable())
                .httpBasic((http)->http.disable())
                .sessionManagement((session)->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        httpSecurity.authorizeHttpRequests((auth)->auth
        		.requestMatchers("/mypage/**", "/apply/**", "/survey/survey/page/**", "/survey/surveyform")
                .authenticated()
                .requestMatchers("/adminpage/**", "/notice/create", "/notice/detail/modify/**")
                .hasRole("ADMIN")
                .anyRequest()
                .permitAll());
        		
        httpSecurity.exceptionHandling((exception)->exception.authenticationEntryPoint(new FailedAuthenticationEntryPoint()));

        httpSecurity.oauth2Login((oauth2)->oauth2.
                userInfoEndpoint(
                (userInfoEndpointConfig)->userInfoEndpointConfig.userService(oauth2UserService))
                .successHandler(oauth2SuccessHandler));

        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);


        return httpSecurity.build();


    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint{
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("{\"code:\":\"AF\", \"message\": \"Authorization Failed\"}");
    }


}

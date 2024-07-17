package com.surveyProject.project.web.dto.auth;

import lombok.Builder;
import lombok.Getter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Map;

@Getter
@Builder
public class OAuthAttributes {
    private Map<String, Object> attributes;
    private String nameAttributeKey;
    private String name;
    private String email;
    private String picture;
    private String password;
    public static String getGoogleEmail(Map<String, Object> attributes){
        return (String)attributes.get("email");
    }
    public static OAuthAttributes googleMemberInfo(String userNameAttributeName, Map<String, Object> attributes) {
                    String id = (String) attributes.get("sub");
        return OAuthAttributes.builder()
                .name((String) attributes.get("name"))
                .password(new BCryptPasswordEncoder().encode(id))
                .email((String) attributes.get("email"))
                .picture((String) attributes.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }
    public static OAuthAttributes naverMemberInfo(String userNameAttributeName, Map<String, Object> attributes) {

        Map<String, Object> response = null;
        response = (Map<String, Object>) attributes.get("response");
        String id = (String)response.get("id");
        //naver는 google과 다르게 respone에서 빼와야 함.
        return OAuthAttributes.builder()
                .name((String) response.get("name"))
                .email((String) response.get("email"))
                .password(new BCryptPasswordEncoder().encode(id))
                .picture((String) response.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    public static OAuthAttributes facebookMemberInfo(String userNameAttributeName, Map<String, Object> attributes) {
        String id = (String) attributes.get("sub");
        return OAuthAttributes.builder()
                .name((String) attributes.get("name"))
                .password(new BCryptPasswordEncoder().encode(id))
                .email((String) attributes.get("email"))
                .picture((String) attributes.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }



}

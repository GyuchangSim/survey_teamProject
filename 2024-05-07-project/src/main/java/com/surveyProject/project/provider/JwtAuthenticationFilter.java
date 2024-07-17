package com.surveyProject.project.provider;

import com.surveyProject.project.domain.survey.user.CustomOauth2User;
import com.surveyProject.project.web.dto.auth.LoginResDto;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtProvider jwtProvider;
    private LoginResDto loginResDto;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //새로 추가
//        String authorization = null;
//        Cookie[] cookies = request.getCookies();
//        for(Cookie cookie : cookies){
////            System.out.println("cookie.getName() = " + cookie.getName());
//            if(cookie.getName().equals("Authorization")){
//                authorization = cookie.getValue();
//            }
//            //Authorization 헤더 검증
//            if(authorization == null){
//                System.out.println("token null");
//                filterChain.doFilter(request,response);
//
//                //조건에 해당되면 메소드 종료(필수)
//                return;
//            }
//            String token = authorization;

//        }
            //새로 추가   끝



        try{
            String token = parseBearerToken(request);

            if(token == null){
                filterChain.doFilter(request, response);
                return;
            }
            String email = jwtProvider.validate(token);
            if(email == null){
                filterChain.doFilter(request, response);
                return;
            }

            AbstractAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(email, null, AuthorityUtils.NO_AUTHORITIES);
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            securityContext.setAuthentication(authenticationToken);
            SecurityContextHolder.setContext(securityContext);
        }catch (Exception exception){
            exception.printStackTrace();
        }
        filterChain.doFilter(request, response);



    }

    private String parseBearerToken(HttpServletRequest request){
        String authorization = request.getHeader("Authorization");

        boolean hasAuthorization = StringUtils.hasText(authorization);
        if(!hasAuthorization)return null;

        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer) return null;

        String token = authorization.substring(7);
        return token;
    }
}

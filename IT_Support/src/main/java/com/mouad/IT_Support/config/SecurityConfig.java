package com.mouad.IT_Support.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/auth/authenticate","/api/auth/register/admin").permitAll()
                        .requestMatchers("/api/ticket/statut/**", "/api/ticket/tickets/**").hasAuthority("TECHNICIEN")

                        .requestMatchers("/api/auth/register/technicien*", "/api/equipment/add","/api/equipment/edit/**","/api/equipment/delete/**",
                                "api/panne/add","/api/panne/edit/**","/api/panne/delete/**", "/api/ticket/all","/api/ticket/assigner/**",
                                "/api/equipment/statut/**", "/api/techniciens","/api/utilisateurs").hasAuthority("ADMIN")

                        .requestMatchers("/api/ticket/add","/api/ticket/mytickets/**").hasAuthority("UTILISATEUR")
                        .requestMatchers("/api/panne/all","/api/equipment/all").hasAnyAuthority("ADMIN","UTILISATEUR")
                        .anyRequest()
                        .authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}
package com.projetoIntegrador.Projeto_Integrador_backend.DTOs;


import com.projetoIntegrador.Projeto_Integrador_backend.entities.User;

public class UserDTO {

    private Long id;
    private String name;
    private String email;

    public UserDTO(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static UserDTO transforma(User user){
        return new UserDTO(user.getId(), user.getName(), user.getEmail());
    }
}

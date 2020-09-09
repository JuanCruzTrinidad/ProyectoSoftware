package com.unla.deporteonline.entities;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name="usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name= "email")
    private String email;

    @Column(name= "password")
    private String password;

    @Column(name= "dni")
    private int dni;

    @Column(name= "fechaNacimiento")
    private LocalDate fechaNacimiento;
}

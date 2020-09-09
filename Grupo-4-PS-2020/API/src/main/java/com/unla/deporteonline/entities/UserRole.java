package com.unla.deporteonline.entities;

import javax.persistence.*;

@Entity
@Table(name= "user_role", uniqueConstraints=@UniqueConstraint(columnNames={"role","user_id"}))
public class UserRole {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "role", nullable = false, length = 100)
    private String role;

    public UserRole(){}

	public UserRole(int id, User user, String role) {
		this.id = id;
		this.user = user;
		this.role = role;
	}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    
    
}

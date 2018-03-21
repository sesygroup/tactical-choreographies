package it.disim.univaq.alexanderperucci.services.reds.business.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "USERS")
public class User implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID", nullable = false)
    private Long id = null;

    @Column(name = "FIRSTNAME", nullable = false, length = 255)
    private String firstname;

    @Column(name = "LASTNAME", nullable = false, length = 255)
    private String lastname;

    @Column(name = "USERNAME", nullable = false, length = 16, updatable = false, unique = true)
    private String username;

    @Column(name = "PASSWORD", nullable = false, length = 255)
    private String password;

    @Column(name = "EMAIL", nullable = false, length = 255)
    private String email;

    @Temporal(TemporalType.DATE)
    @Column(columnDefinition = "timestamp", name = "CREATED", nullable = false, updatable = false)
    private Date created = new Date();

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "USERS_ROLES",
            joinColumns = {
                @JoinColumn(name = "USER_ID")},
            inverseJoinColumns = {
                @JoinColumn(name = "ROLE_ID")})
    private Set<Role> roles = new HashSet<Role>();

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public void addRole(Role role) {
        roles.add(role);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public boolean isAdmin() {
        for (Role role : roles) {
            if (role.getId() == 1L) {
                return true;
            }
        }
        return false;

    }

}

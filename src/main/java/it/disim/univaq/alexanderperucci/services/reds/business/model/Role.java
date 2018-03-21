package it.disim.univaq.alexanderperucci.services.reds.business.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ROLES")
public class Role implements java.io.Serializable {

	public static final Role ADMIN;
	
	static {
		ADMIN = new Role();
		ADMIN.setId(1L);
		ADMIN.setName("admin");
	}
	
	@Id
	@Column(name = "ROLE_ID", nullable = false)
	private Long id;
	
	@Column(name = "NAME", nullable = false, length = 255)
	private String name;
	
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

	

}

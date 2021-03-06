package com.gk.gestibank.model;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Produces("application/json")
@Entity
@NamedQuery(name="Notification.delete", query="DELETE FROM Notification n where n.id = :id")
public class Notification implements Serializable {

	//Variables
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	private String message;
	private String type;
	private boolean toggled;//remplace IsRead (qui correspond � un mot cl� sql, et qui pose soucis)
	

	//Constructeurs
	public Notification() {
	}
	public Notification(Date date, String message, String type, boolean toggled) {
		super();
		this.message = message;
		this.type = type;
		this.date = date;
		this.toggled = toggled;
	}
	
	//GET/SETTERS
	//Id
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	//Message
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	//Type
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	//date
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	//isRead
	public boolean getToggled() {
		return toggled;
	}
	public void setToggled(boolean toggled) {
		this.toggled = toggled;
	}
	@Override
	public String toString() {
		return "Notification [id=" + id + ", date=" + date + ", message=" + message + ", type=" + type + ", read="
				+ toggled + "]";
	}
}

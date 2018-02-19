package com.gk.gestibank.model;
import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Entity
public class Notification {

	//Variables
	@Id
	private int id;
	private Date date;
	private String message;
	private String type;
	private boolean read;

	//Constructeurs
	public Notification() {
	}
	public Notification(Date date, String message, String type, boolean read) {
		super();
		this.message = message;
		this.type = type;
		this.date = date;
		this.read = read;
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
	public boolean getRead() {
		return read;
	}
	public void setRead(boolean read) {
		this.read = read;
	}
	@Override
	public String toString() {
		return "Notification [id=" + id + ", date=" + date + ", message=" + message + ", type=" + type + ", read="
				+ read + "]";
	}
}

package com.gk.gestibank.model;
import java.util.Date;

import javax.persistence.Entity;

import org.jvnet.hk2.config.InjectionTarget;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Entity
public class Notification {

	//Variables
	private String libelle;
	private Date date;
	private boolean isRead;
	
	//Constructeurs
	public Notification() {
	}
	public Notification(String libelle, Date date, boolean isRead) {
		super();
		this.libelle = libelle;
		this.date = date;
		this.isRead = isRead;
	}

	//GET/SETTERS
	//isRead
	public boolean isRead() {
		return isRead;
	}
	public void setRead(boolean isRead) {
		this.isRead = isRead;
	}
	//libelle	
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	//date
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	//ToString
	@Override
	public String toString() {
		return "Notification [getLibelle()=" + getLibelle() + ", getDate()="
				+ getDate() + "]";
	}
}

package com.gk.gestibank.model;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Notification {

	private String libelle;
	private Date date;
	
	public Notification() {
	}

	public Notification(String libelle, Date date) {
		super();
		this.libelle = libelle;
		this.date = date;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Notification [getLibelle()=" + getLibelle() + ", getDate()="
				+ getDate() + "]";
	}
}
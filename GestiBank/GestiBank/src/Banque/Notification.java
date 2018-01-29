package Banque;
import java.util.*;


public class Notification {
	
    private Date date;
    private String message;
    private int id;
    private String type;

	public Notification(Date date, String message, int id, String type) {
		this.date = date;
		this.message = message;
		this.id = id;
		this.type = type;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Notification [getDate()=" + getDate() + ", getMessage()="
				+ getMessage() + ", getId()=" + getId() + ", getType()="
				+ getType() + "]";
	}


	
    



}
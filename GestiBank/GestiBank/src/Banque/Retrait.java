package Banque;

import java.util.*;

	public class Retrait extends Operation {

	public Retrait() {
		super();
	}

	public Retrait(int numero, Date dateOperation, double montant) {
		super(numero, dateOperation, montant);
	}
}
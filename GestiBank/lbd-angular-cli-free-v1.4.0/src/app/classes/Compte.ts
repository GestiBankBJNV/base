import { Operation } from './operation';

//Dummy Compte
export class Compte{
	iban : String;
	solde : number;
	type : String;
	operations : Operation[];
}
import { Operation } from './operation';

export class Compte{
	iban : String;
	solde : number;
	type : String;
	operations : Operation[];
}
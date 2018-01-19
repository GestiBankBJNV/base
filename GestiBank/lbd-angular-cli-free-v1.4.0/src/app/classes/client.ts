import {Compte} from './compte';
import {Notification} from './notification';

//Dummy client
export class Client {
	username : String;
	entreprise : String;
	nom : String;
	prenom : String;
	password : String;
	mail : String;
	comptes : Compte[];
	notifications : Notification[];
	adresse : String;
	pays : String;
	codePostal : String;
	ville : String;
}
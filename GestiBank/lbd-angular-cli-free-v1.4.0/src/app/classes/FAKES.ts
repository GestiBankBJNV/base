//Dummies
import { Client } from './client';
import { Compte } from './compte';
import { Notification } from './notification';
import { Operation } from './operation';



//Opérations temporaire (liste)
export const OPERATIONS : Operation[] = [
	{date : new Date(), libelle : "Retrait DAB Lille", type : "Débit", montant : 100.0},
	{date : new Date(), libelle : "Retrait DAB Marseille", type : "v", montant : 80.0},
	{date : new Date(), libelle : "Versement", type : "Crédit", montant : 1600.0},
	{date : new Date(), libelle : "Retrait DAB", type : "Débit", montant : 50.0},
	{date : new Date(), libelle : "Retrait DAB", type : "Débit", montant : 50.0},
	{date : new Date(), libelle : "Retrait DAB", type : "Débit", montant : 80.0}
]

//Notifs temporaires (liste)
export const NOTIFS : Notification[] = [
	{ libelle : "Notif 1", date : new Date(), isRead : false},
	{ libelle : "Notif 2", date : new Date(), isRead : false},
	{ libelle : "Notif 3", date : new Date(), isRead : false},
	{ libelle : "Notif 4", date : new Date(), isRead : false},
	{ libelle : "Notif 5", date : new Date(), isRead : true},
	{ libelle : "Notif 6", date : new Date(), isRead : true}
]

//Comptes temporaires (liste)
export const COMPTES : Compte[] = [
	{ iban : "0123456789", solde : 1500.18, type : "courant", operations : OPERATIONS},
	{ iban : "1011121314", solde : 1510.28, type : "courant", operations : OPERATIONS},
	{ iban : "1516171819", solde : 1520.38, type : "epargne", operations : OPERATIONS},
	{ iban : "2021222324", solde : 1530.48, type : "epargne", operations : OPERATIONS}
]

//client temporaire (unique)
export const CLIENT : Client = {
	username : "sdefruit",
	entreprise : "CAF",
	nom : "DeFruit",
	prenom : "Salade",
	password : "azerty",
	mail : "il_etait_ou_hein_le_youki@gotainer.com",
	comptes : COMPTES,
	notifications : NOTIFS,
	adresse : "10 rue Tabaga",
	pays : "Fronce",
	codePostal : "59000",
	ville : "Lille"
}
//Dummies
import { Client } from './client';
import { Compte } from './compte';
import { Notification } from './notification';
import { Operation } from './operation';



//Opérations temporaire (liste)
export const OPERATIONS : Operation[] = [
	{date : new Date(), libelle : "Retrait DAB Lille", type : "operation_type_debit", montant : 100.0},
	{date : new Date(), libelle : "Retrait DAB Marseille", type : "operation_type_debit", montant : 80.0},
	{date : new Date(), libelle : "Versement", type : "operation_type_credit", montant : 1600.0},
	{date : new Date(), libelle : "Retrait DAB", type : "operation_type_debit", montant : 50.0},
	{date : new Date(), libelle : "Retrait DAB", type : "operation_type_debit", montant : 50.0},
	{date : new Date(), libelle : "Retrait DAB", type : "operation_type_debit", montant : 80.0}
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
	{ iban : "0123456789", solde : 1500.18, type : "account_type_current", operations : OPERATIONS},
	{ iban : "1011121314", solde : 1510.28, type : "account_type_current", operations : OPERATIONS},
	{ iban : "1516171819", solde : 1520.38, type : "account_type_saving", operations : OPERATIONS},
	{ iban : "2021222324", solde : 1530.48, type : "account_type_saving", operations : OPERATIONS}
]

//client temporaire (unique)
export const CLIENT : Client = {
	username : "sdefruit",
	entreprise : "CAF",
	nom : "Dupont",
	prenom : "Thierry",
	password : "azerty",
	mail : "il_etait_ou_hein_le_youki@gotainer.com",
	comptes : COMPTES,
	notifications : NOTIFS,
	adresse : "10 rue Tabaga",
	pays : "Fronce",
	codePostal : "59000",
	ville : "Lille"
}
// TODO : mettre à jour les classes avec diagramme de classe
// Pourquoi dans java on a : EspaceAdmin, Espace... , Guest ?
// Je n'ai pas mis de méthodes dans les classes car ce n'est pas vraiment utile en typescript (et il va falloir tout refaire en java de toute façon...)
/* *********** Classes *********** */

export class Utilisateur {  // ajouter password (dans java)
  id: number;  
  prenom: string;
  nom: string;  
  nomUtilisateur: string; // à changer dans java
  password: string;
  email: string;  
  numTel: String;
  statut: String;
}

export class Conseiller extends Utilisateur {
  matricule: string;
  dateDebutContrat: Date;
  clients: Client[];
  demandesInscription: DemandeInscription[];  
}

export class Client extends Utilisateur {  
  demandes: DemandeClient[];
  adresse = "";
  ville = "";
  cp = "";
  nbEnfants: number;
  situationMatrimoniale: string;
  comptes: Compte[];
  isClient: boolean;
}

export class Compte {
  code: number;
  solde: number;
  operations: Operation[];
  decouvert: number;
}

export class CompteEpargne extends Compte {
  taux: number;
}

export class Operation {
  numero: number;
  dateOperation: Date;
  montant: number;
  type: string;
}

export class DemandeInscription { // = Inscription dans java (à modifier)
  id: number;
  date: Date = new Date();
  dateAffectation: Date;
  statut: string = "en cours";
  libelle: string;
  coordonnees: Client;
}

export class DemandeClient {
  id: number;
  date: Date = new Date();
  dateAffectation: Date;
  statut: string = "en cours";
  libelle: string;
}

export class DemandeModif extends DemandeClient {
  coordonnees: Client;
  libelle = 'Demande de modification';
}

export class DemandeCreationCompte extends DemandeClient {
  type: string;
  libelle = "Demande de création d'un compte " + this.type;
}

export class Notification {  
  id: number;
  date: Date;
  message: string;
  type: string;
  //isRead : boolean;//A rajouter dans Java
}

/* *********** Variables *********** */
declare var $:any;
var demandeCompteEpargne = new DemandeCreationCompte();
demandeCompteEpargne.type = 'epargne';
demandeCompteEpargne.date = new Date(2018,0,20);

/* *********** Functions *********** */
export function showNotification(from, align, message, typeMessage, logo){      
  $.notify({
      icon: logo,
      message: message
  },{
      type: typeMessage,
      timer: 1000,
      placement: {
          from: from,
          align: align
      }
  });
}

/* *********** Instances *********** */
export const clients: Client[] = [ // todo : rajouter des comptes
  {
    id: 1,    
    prenom: 'Antoine',
    nom: 'Dupont',   
    nomUtilisateur: 'ADupont', 
    password: '',
    email: 'Antoine@email.com',
    statut: 'client',
    adresse: '23 rue Gambetta',  ville: 'Lille', cp: '59000',
    numTel: '0683657416',
    nbEnfants: 0,
    situationMatrimoniale: 'célibataire',
    comptes: [],
    demandes: [],
    isClient: true
  },
  {
    id: 2,
    prenom: 'Mathieu',
    nom: 'Cassel',  
    nomUtilisateur: 'MCassel', 
    password: '',
    email: 'Mathieu@email.com',  
    statut: 'client',
    adresse: '3 rue des accacias',  ville: 'Massy', cp: '91000',
    numTel: '0616582364',
    nbEnfants: 2,
    situationMatrimoniale: 'marié',
    comptes: [],
    demandes: [],
    isClient: true
  },
  {
    id: 3,    
    prenom: 'Lydie',
    nom: 'Despres',  
    nomUtilisateur: 'LDespres',
    password: '', 
    email: 'Lydie@email.com',   
    statut: 'client',  
    adresse: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000',
    numTel: '0683657416',
    nbEnfants: 0,
    situationMatrimoniale: 'pacsé',
    comptes: [],
    demandes: [],
    isClient: true
  },
  {
    id: 4,    
    prenom: 'Aude',
    nom: 'Cardin',
    nomUtilisateur: 'ACardin', 
    password: '',
    email: 'Aude@email.com',  
    statut: 'client',
    adresse: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000',
    numTel: '0683657416',
    nbEnfants: 3,
    situationMatrimoniale: 'marié',
    comptes: [],
    demandes: [],
    isClient: true
  },
  {
    id: 5,    
    prenom: 'Coralie',
    nom: 'Machin',    
    nomUtilisateur: 'CMachin',
    password: '',
    email: 'Coralie@email.com',
    statut: 'client',
    adresse: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000',
    numTel: '0683657416',
    nbEnfants: 1,
    situationMatrimoniale: 'marié',
    comptes: [],
    demandes: [],
    isClient: true
  },
  {
    id: 6,    
    prenom: 'David',
    nom: 'Sully',  
    nomUtilisateur: 'DSully',  
    password: '',
    email: 'Omar@email.com',
    statut: 'client',
    adresse: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000',
    numTel: '0683657416',
    nbEnfants: 0,
    situationMatrimoniale: 'célibataire',
    comptes: [],
    demandes: [],
    isClient: true
  },
  {
    id: 7,    
    prenom: 'Adrien',
    nom: 'Bergstein',   
    nomUtilisateur: 'ABergstein', 
    password: '',
    email: 'Adrien@email.com',
    statut: 'client',
    adresse: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000',
    numTel: '0683657416',
    nbEnfants: 2,
    situationMatrimoniale: 'marié',
    comptes: [],
    demandes: [],
    isClient: true
  },
];

export const demandesInscription: DemandeInscription[] = [
  {
    id: 1,
    date: new Date(2018,0,15),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 101, email:"dakota@truc.com", prenom: "Dakota", nom: "Rice", nomUtilisateur: 'DRice', password: '', statut: 'client', adresse: "2 rue machinchose", ville: "Uneville", cp:"56480", numTel: '0625364859', nbEnfants: 0, situationMatrimoniale:"célibataire", comptes: [], demandes: [], isClient: false}
  },
  {
    id: 2,
    date: new Date(2017,11,5),
    dateAffectation: new Date(2017,6,12),
    statut: 'traitée',
    libelle: "inscription",
    coordonnees: {id: 102, email:"minerva@truc.com", prenom: "Minerva", nom: "Hooper", nomUtilisateur: 'MHooper', password: '', statut: 'client', adresse: "2 rue machinchose", ville: "Uneville", cp:"56480", numTel: '0625364859', nbEnfants: 0, situationMatrimoniale:"célibataire", comptes: [], demandes: [], isClient: false}
  },
  {
    id: 3,
    date: new Date(2018,0,7),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 103, email:"sage@truc.com", prenom: "Sage", nom: "Rodriguez", nomUtilisateur: 'SRodriguez', password: '', statut: 'client', adresse: "2 rue machinchose", ville: "Uneville", cp:"56480", numTel: '0625364859', nbEnfants: 0, situationMatrimoniale:"célibataire", comptes: [], demandes: [], isClient: false}
  },
  {
    id: 4,
    date: new Date(2018,0,9),
    dateAffectation: new Date(2018,0,11),
    statut: 'en cours',
    libelle: "inscription",
    coordonnees: {id: 104, email:"philip@truc.com", prenom: "Philip", nom: "Chaney", nomUtilisateur: 'PChaney', password: '', statut: 'client', adresse: "2 rue machinchose", ville: "Uneville", cp:"56480", numTel: '0625364859', nbEnfants: 0,situationMatrimoniale:"célibataire", comptes: [], demandes: [], isClient: false}
  },
  {
    id: 5,
    date: new Date(2018,0,13),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 105, email:"doris@truc.com", prenom: "Doris", nom: "Greene", nomUtilisateur: 'DGreen', password: '', statut: 'client', adresse: "2 rue machinchose", ville: "Uneville", cp:"56480", numTel: '0625364859', nbEnfants: 0, situationMatrimoniale:"célibataire", comptes: [], demandes: [], isClient: false}
  },
  {
    id: 6,
    date: new Date(2018,0,10),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 106, email:"mason@truc.com", prenom: "Mason", nom: "Porter", nomUtilisateur:'MPorter', password: '', statut: 'client', adresse: "2 rue machinchose", ville: "Uneville", cp:"56480", numTel: '0625364859', nbEnfants: 0, situationMatrimoniale:"célibataire", comptes: [], demandes: [], isClient: false}
  },
];

export const conseillers: Conseiller[] = [
  {
    id: 1,
    matricule: '0001',
    email: 'martine@email.com',
    prenom: 'Martine',
    nom: 'Dupont',  
    nomUtilisateur: 'MDupont',  
    password: '',
    statut: 'conseiller',
    numTel: '0625364859',
    dateDebutContrat: new Date(2018, 0, 1),
    clients: [clients[0], clients[1]],
    demandesInscription: []
  },
  {
    id: 2,
    matricule: '0002',
    email: 'roger@email.com',
    prenom: 'Roger',
    nom: 'Martin',   
    nomUtilisateur: 'RMartin', 
    password: '',
    statut: 'conseiller',
    numTel: '0625364859',
    dateDebutContrat: new Date(2018, 0, 5),
    clients: [clients[2], clients[6]],
    demandesInscription: [demandesInscription[0], demandesInscription[2], demandesInscription[3], demandesInscription[4]]
  },
  {
    id: 3,
    matricule: '0003',
    email: 'alice@email.com',
    prenom: 'Alice',
    nom: 'Pommier',    
    nomUtilisateur: 'APommier',
    password: '',
    statut: 'conseiller',
    numTel: '0625364859',
    dateDebutContrat: new Date(2017, 11, 15),
    clients: [clients[3], clients[4], clients[5]],
    demandesInscription: []
  },
  {
    id: 4,
    matricule: '0004',
    email: 'Eva@email.com',
    prenom: 'Eva',
    nom: 'Cardin',   
    nomUtilisateur: 'ECardin', 
    password: '',
    statut: 'conseiller',
    numTel: '0625364859',
    dateDebutContrat: new Date(2018, 0, 23),
    clients: [clients[6]],
    demandesInscription: []
  },
  {
    id: 5,
    matricule: '0005',
    email: 'Yves@email.com',
    prenom: 'Yves',
    nom: 'Gris',   
    nomUtilisateur: 'YGris', 
    password: '',
    statut: 'conseiller',
    numTel: '0625364859',
    dateDebutContrat: new Date(2018, 0, 3),
    clients: [],
    demandesInscription: []
  },
  {
    id: 6,
    matricule: '0006',
    email: 'Jean-Pierre@email.com',
    prenom: 'Jean-Pierre',
    nom: 'Malin',    
    nomUtilisateur: 'JPMalin',
    password: '',
    statut: 'conseiller',
    numTel: '0625364859',
    dateDebutContrat: new Date(2018, 0, 7),
    clients: [],
    demandesInscription: []
  },
];


// TODO : mettre à jour les classes avec diagramme de classe
// Pourquoi dans java on a : EspaceAdmin, Espace... , Guest ?
// Je n'ai pas mis de méthodes dans les classes car ce n'est pas vraiment utile en typescript (et il va falloir tout refaire en java de toute façon...)

/* *********** Classes *********** */

export class Personne {  // ajouter password (dans java)
  id: number;  
  prenom: string;
  nom: string;  
  nomUtilisateur: string; // à changer dans java
  password: string;
  email: string;
  adresse: Adresse;
  numTel: String;
}

export class Adresse { // dans java on a ajouté le numéro : inutile, je pense ça va avec rue
    rue = "";
    ville = "";
    cp = "";   // à changer dans java
}

export class SuperAdmin extends Personne { 
  conseillers: Conseiller[]; // est-ce nécessaire ? ils sont déjà dans la banque...
  demandesInscriptions: DemandeInscription[]; // todo: actuellement, les demandes ne sont pas enregistrées dans l'admin
}

export class Conseiller extends Personne {
  matricule: string;
  dateDebutContrat: Date;
  clients: Client[];
  demandes: Demande[];
}

export class Client extends Personne {  
  /*demandes: DemandeClient[];*/
  nbEnfants: number;
  situationMatrimoniale: string;
  comptes: Compte[];
  //conseiller : Conseiller;
}

export class Compte {
  code: number;
  solde: number;
  operations: Operation[];
}

export class CompteCourant extends Compte {
  taux: number;
}

export class CompteEpargne extends Compte {
  decouvert: number;
}

export class Operation {
  numero: number;
  dateOperation: Date;
  montant: number;
}

export class Retrait extends Operation {  
}

export class Versement extends Operation {  
}

export class Virement extends Operation {
}

export class Demande { // manque le statut et la date d'affectation dans java
  id: number; // à changer dans java
  date: Date;
  dateAffectation: Date;
  statut: string;
  libelle: string;
}


export class DemandeInscription extends Demande { // = Inscription dans java (à modifier)
  coordonnees: Personne;
}

export class DemandeClient extends Demande {
}

export class DemandeChequier extends DemandeClient {
  libelle = 'Demande de chéquier'; 
}

export class DemandeModif extends DemandeClient {
  coordonnees: Personne;
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

export class Banque {
  clients: Client[];
  conseillers: Conseiller[]; // enlever la majuscule dans java
  superAdmin: SuperAdmin;
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
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    numTel: '0683657416',
    nbEnfants: 0,
    situationMatrimoniale: 'célibataire',
    comptes: []
    //demandes: []
  },
  {
    id: 2,
    prenom: 'Mathieu',
    nom: 'Cassel',  
    nomUtilisateur: 'MCassel', 
    password: '',
    email: 'Mathieu@email.com',  
    adresse: {rue: '3 rue des accacias',  ville: 'Massy', cp: '91000'},
    numTel: '0616582364',
    nbEnfants: 2,
    situationMatrimoniale: 'marié',
    comptes: []
    //demandes: [demandeCompteEpargne]
  },
  {
    id: 3,    
    prenom: 'Lydie',
    nom: 'Despres',  
    nomUtilisateur: 'LDespres',
    password: '', 
    email: 'Lydie@email.com',     
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    nbEnfants: 0,
    situationMatrimoniale: 'pacsé',
    comptes: []
    //demandes: [new DemandeChequier()]
  },
  {
    id: 4,    
    prenom: 'Aude',
    nom: 'Cardin',
    nomUtilisateur: 'ACardin', 
    password: '',
    email: 'Aude@email.com',  
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    nbEnfants: 3,
    situationMatrimoniale: 'marié',
    comptes: []
    //demandes: []
  },
  {
    id: 5,    
    prenom: 'Coralie',
    nom: 'Machin',    
    nomUtilisateur: 'CMachin',
    password: '',
    email: 'Coralie@email.com',
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    nbEnfants: 1,
    situationMatrimoniale: 'marié',
    comptes: []
    //demandes: []
  },
  {
    id: 6,    
    prenom: 'David',
    nom: 'Sully',  
    nomUtilisateur: 'DSully',  
    password: '',
    email: 'Omar@email.com',
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    nbEnfants: 0,
    situationMatrimoniale: 'célibataire',
    comptes: []
    //demandes: []
  },
  {
    id: 7,    
    prenom: 'Adrien',
    nom: 'Bergstein',   
    nomUtilisateur: 'ABergstein', 
    password: '',
    email: 'Adrien@email.com',
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    nbEnfants: 2,
    situationMatrimoniale: 'marié',
    comptes: []
    //demandes: []
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
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    numTel: '0625364859',
    dateDebutContrat: new Date(),
    clients: [clients[0], clients[1]],
    demandes: []
  },
  {
    id: 2,
    matricule: '0002',
    email: 'roger@email.com',
    prenom: 'Roger',
    nom: 'Martin',   
    nomUtilisateur: 'RMartin', 
    password: '',
    adresse: {rue: '12 rue de Paris',  ville: 'Antony', cp: '92160'},
    numTel: '0625364859',
    dateDebutContrat: new Date(),
    clients: [clients[2]],
    demandes: []
  },
  {
    id: 3,
    matricule: '0003',
    email: 'alice@email.com',
    prenom: 'Alice',
    nom: 'Pommier',    
    nomUtilisateur: 'APommier',
    password: '',
    adresse: {rue: '48 boulevard Pasteur',  ville: 'Marcq-en-Baroeul', cp: '59700'},
    numTel: '0625364859',
    dateDebutContrat: new Date(),
    clients: [clients[3], clients[4], clients[5]],
    demandes: []
  },
  {
    id: 4,
    matricule: '0004',
    email: 'Eva@email.com',
    prenom: 'Eva',
    nom: 'Cardin',   
    nomUtilisateur: 'ECardin', 
    password: '',
    adresse: {rue: '2 rue machin',  ville: 'Trucville', cp: '60500'},
    numTel: '0625364859',
    dateDebutContrat: new Date(),
    clients: [clients[6]],
    demandes: []
  },
  {
    id: 5,
    matricule: '0005',
    email: 'Yves@email.com',
    prenom: 'Yves',
    nom: 'Gris',   
    nomUtilisateur: 'YGris', 
    password: '',
    adresse: {rue: '6 rue des cèdres',  ville: 'Rambouillet', cp: '78450'},
    numTel: '0625364859',
    dateDebutContrat: new Date(),
    clients: [],
    demandes: []
  },
  {
    id: 6,
    matricule: '0006',
    email: 'Jean-Pierre@email.com',
    prenom: 'Jean-Pierre',
    nom: 'Malin',    
    nomUtilisateur: 'JPMalin',
    password: '',
    adresse: {rue: '85 avenue des Pins',  ville: 'Grenoble', cp: '38000'},
    numTel: '0625364859',
    dateDebutContrat: new Date(),
    clients: [],
    demandes: []
  },
];

export const demandesInscription: DemandeInscription[] = [
  {
    id: 1,
    date: new Date(2018,0,15),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 101, email:"dakota@truc.com", prenom: "Dakota", nom: "Rice", nomUtilisateur: 'DRice', password: '', adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}, numTel: '0625364859',}
  },
  {
    id: 2,
    date: new Date(2017,11,5),
    dateAffectation: new Date(2017,6,12),
    statut: 'traitée',
    libelle: "inscription",
    coordonnees: {id: 102, email:"minerva@truc.com", prenom: "Minerva", nom: "Hooper", nomUtilisateur: 'MHooper', password: '', adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}, numTel: '0625364859',}
  },
  {
    id: 3,
    date: new Date(2018,0,7),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 103, email:"sage@truc.com", prenom: "Sage", nom: "Rodriguez", nomUtilisateur: 'SRodriguez', password: '', adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}, numTel: '0625364859',}
  },
  {
    id: 4,
    date: new Date(2018,0,9),
    dateAffectation: new Date(2018,0,11),
    statut: 'en cours',
    libelle: "inscription",
    coordonnees: {id: 104, email:"philip@truc.com", prenom: "Philip", nom: "Chaney", nomUtilisateur: 'PChaney', password: '', adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}, numTel: '0625364859',}
  },
  {
    id: 5,
    date: new Date(2018,0,13),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 105, email:"doris@truc.com", prenom: "Doris", nom: "Greene", nomUtilisateur: 'DGreen', password: '', adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}, numTel: '0625364859',}
  },
  {
    id: 6,
    date: new Date(2018,0,10),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {id: 106, email:"mason@truc.com", prenom: "Mason", nom: "Porter", nomUtilisateur:'MPorter', password: '', adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}, numTel: '0625364859',}
  },
];

              
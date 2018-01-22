

/* *********** Classes *********** */

export class Personne {  
  email: string;
  prenom: string;
  nom: string;
  adresse: Adresse;
  // TODO : numTel: String; --> attention formulaire fiche conseiller
  // Faut-il ajouter le pseudo ??
}

export class Conseiller extends Personne {
  matricule: string;
  clients: Client[];
}

export class Client extends Personne {
  numTel: String; // à retirer quand ce sera dans la classe Personne
  demandes: DemandeClient[];
}

export class Adresse {
	  rue = "";
  	ville = "";
  	cp = "";   
}

export class Demande {
  date: Date;
  libelle: string;
}


export class DemandeInscription extends Demande {
  coordonnees: Personne;
}

export class DemandeClient extends Demande {
  // TODO
}

export class DemandeChequier extends DemandeClient {
  // TODO
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

export const clientsTab: Client[] = [
  {
    email: 'Antoine@truc.com',
    prenom: 'Antoine',
    nom: 'Dupont',    
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    numTel: '0683657416',
    demandes: [] 
  },
  {
    email: 'Mathieu@truc.com',
    prenom: 'Mathieu',
    nom: 'Cassel',    
    adresse: {rue: '3 rue des accacias',  ville: 'Massy', cp: '91000'},
    numTel: '0616582364',
    demandes: [demandeCompteEpargne] 
  },
  {
    email: 'Lydie@truc.com',
    prenom: 'Lydie',
    nom: 'Despres',    
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    demandes: [new DemandeChequier()] 
  },
  
];

export const conseillers: Conseiller[] = [
  {
    matricule: '0001',
    email: 'martine@truc.com',
    prenom: 'Martine',
    nom: 'Dupont',    
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    clients: clientsTab   
  },
  {
    matricule: '0002',
    email: 'roger@truc.com',
    prenom: 'Roger',
    nom: 'Martin',    
    adresse: {rue: '12 rue de Paris',  ville: 'Antony', cp: '92160'},
    clients: [] 
  },
  {
    matricule: '0003',
    email: 'alice@truc.com',
    prenom: 'Alice',
    nom: 'Pommier',    
    adresse: {rue: '48 boulevard Pasteur',  ville: 'Marcq-en-Baroeul', cp: '59700'},
    clients: [] 
  },
  {
    matricule: '0004',
    email: 'Eva@truc.com',
    prenom: 'Eva',
    nom: 'Cardin',    
    adresse: {rue: '2 rue machin',  ville: 'Trucville', cp: '60500'},
    clients: [] 
  },
  {
    matricule: '0005',
    email: 'Yves@truc.com',
    prenom: 'Yves',
    nom: 'Gris',    
    adresse: {rue: '6 rue des cèdres',  ville: 'Rambouillet', cp: '78450'},
    clients: [] 
  },
  {
    matricule: '0006',
    email: 'Jean-Pierre@truc.com',
    prenom: 'Jean-Pierre',
    nom: 'Malin',    
    adresse: {rue: '85 avenue des Pins',  ville: 'Grenoble', cp: '38000'},
    clients: [] 
  },
];


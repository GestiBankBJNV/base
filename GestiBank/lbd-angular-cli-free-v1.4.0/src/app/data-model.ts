

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
  demandes: Demande[];
}

export class Client extends Personne {
  id: number;
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
  dateAffectation: Date;
  statut: string;
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
export const clients: Client[] = [
  {
    id: 1,
    email: 'Antoine@truc.com',
    prenom: 'Antoine',
    nom: 'Dupont',    
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    numTel: '0683657416',
    demandes: []
  },
  {
    id: 2,
    email: 'Mathieu@truc.com',
    prenom: 'Mathieu',
    nom: 'Cassel',    
    adresse: {rue: '3 rue des accacias',  ville: 'Massy', cp: '91000'},
    numTel: '0616582364',
    demandes: [demandeCompteEpargne]
  },
  {
    id: 3,
    email: 'Lydie@truc.com',
    prenom: 'Lydie',
    nom: 'Despres',    
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    demandes: [new DemandeChequier()]
  },
  {
    id: 4,
    email: 'Aude@truc.com',
    prenom: 'Aude',
    nom: 'Cardin',    
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    demandes: []
  },
  {
    id: 5,
    email: 'Coralie@truc.com',
    prenom: 'Coralie',
    nom: 'Machin',    
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    demandes: []
  },
  {
    id: 6,
    email: 'Omar@truc.com',
    prenom: 'David',
    nom: 'Sully',    
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    demandes: []
  },
  {
    id: 7,
    email: 'Adrien@truc.com',
    prenom: 'Adrien',
    nom: 'Bergstein',    
    adresse: {rue: '65 rue des Pandas',  ville: 'Pandacity', cp: '23000'},
    numTel: '0683657416',
    demandes: []
  },
];

export const conseillers: Conseiller[] = [
  {
    matricule: '0001',
    email: 'martine@truc.com',
    prenom: 'Martine',
    nom: 'Dupont',    
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    clients: [clients[0], clients[1]],
    demandes: []
  },
  {
    matricule: '0002',
    email: 'roger@truc.com',
    prenom: 'Roger',
    nom: 'Martin',    
    adresse: {rue: '12 rue de Paris',  ville: 'Antony', cp: '92160'},
    clients: [clients[2]],
    demandes: []
  },
  {
    matricule: '0003',
    email: 'alice@truc.com',
    prenom: 'Alice',
    nom: 'Pommier',    
    adresse: {rue: '48 boulevard Pasteur',  ville: 'Marcq-en-Baroeul', cp: '59700'},
    clients: [clients[3], clients[4], clients[5]],
    demandes: []
  },
  {
    matricule: '0004',
    email: 'Eva@truc.com',
    prenom: 'Eva',
    nom: 'Cardin',    
    adresse: {rue: '2 rue machin',  ville: 'Trucville', cp: '60500'},
    clients: [clients[6]],
    demandes: []
  },
  {
    matricule: '0005',
    email: 'Yves@truc.com',
    prenom: 'Yves',
    nom: 'Gris',    
    adresse: {rue: '6 rue des cèdres',  ville: 'Rambouillet', cp: '78450'},
    clients: [],
    demandes: []
  },
  {
    matricule: '0006',
    email: 'Jean-Pierre@truc.com',
    prenom: 'Jean-Pierre',
    nom: 'Malin',    
    adresse: {rue: '85 avenue des Pins',  ville: 'Grenoble', cp: '38000'},
    clients: [],
    demandes: []
  },
];

export const demandesInscription: DemandeInscription[] = [
  {
    date: new Date(2018,0,15),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {email:"dakota@truc.com", prenom: "Dakota", nom: "Rice", adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}}
  },
  {
    date: new Date(2017,11,5),
    dateAffectation: new Date(2017,6,12),
    statut: 'traitée',
    libelle: "inscription",
    coordonnees: {email:"minerva@truc.com", prenom: "Minerva", nom: "Hooper", adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}}
  },
  {
    date: new Date(2018,0,7),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {email:"sage@truc.com", prenom: "Sage", nom: "Rodriguez", adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}}
  },
  {
    date: new Date(2018,0,9),
    dateAffectation: new Date(2018,0,11),
    statut: 'en cours',
    libelle: "inscription",
    coordonnees: {email:"philip@truc.com", prenom: "Philip", nom: "Chaney", adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}}
  },
  {
    date: new Date(2018,0,13),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {email:"doris@truc.com", prenom: "Doris", nom: "Greene", adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}}
  },
  {
    date: new Date(2018,0,10),
    dateAffectation: undefined,
    statut: '',
    libelle: "inscription",
    coordonnees: {email:"mason@truc.com", prenom: "Mason", nom: "Porter", adresse: {rue: "2 rue machinchose", ville: "Uneville", cp:"56480"}}
  },
];

              
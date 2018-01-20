export class Conseiller {
  	matricule: string;
	/*username: '';*/
	email: string;
	prenom: string;
	nom: string;
	adresse: Adresse;
	infos: string;
}

export class Adresse {
	  rue = "";
  	ville = "";
  	cp = ""; 
  
}

export const conseillers: Conseiller[] = [
  {
    matricule: '0001',
    email: 'martine@truc.com',
    prenom: 'Martine',
    nom: 'Dupont',    
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', cp: '59000'},
    infos: ''    
  },
  {
    matricule: '0002',
    email: 'roger@truc.com',
    prenom: 'Roger',
    nom: 'Martin',    
    adresse: {rue: '12 rue de Paris',  ville: 'Antony', cp: '92160'},
    infos: ''
  },
  {
    matricule: '0003',
    email: 'alice@truc.com',
    prenom: 'Alice',
    nom: 'Pommier',    
    adresse: {rue: '48 boulevard Pasteur',  ville: 'Marcq-en-Baroeul', cp: '59700'},
    infos: ''
  },
  {
    matricule: '0004',
    email: 'Eva@truc.com',
    prenom: 'Eva',
    nom: 'Cardin',    
    adresse: {rue: '2 rue machin',  ville: 'Trucville', cp: '60500'},
    infos: ''
  },
  {
    matricule: '0005',
    email: 'Yves@truc.com',
    prenom: 'Yves',
    nom: 'Gris',    
    adresse: {rue: '6 rue des cèdres',  ville: 'Rambouillet', cp: '78450'},
    infos: ''
  },
  {
    matricule: '0006',
    email: 'Jean-Pierre@truc.com',
    prenom: 'Jean-Pierre',
    nom: 'Malin',    
    adresse: {rue: '85 avenue des Pins',  ville: 'Grenoble', cp: '38000'},
    infos: ''
  },
];


// Utiliser des notifications
declare var $:any;

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

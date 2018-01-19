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
  	ville  = "";
  	CP  = ""; 
  
}

export const conseillers: Conseiller[] = [
  {
    matricule: '1',
    email: 'martine@truc.com',
    prenom: 'Martine',
    nom: 'Dupont',    
    adresse: {rue: '23 rue Gambetta',  ville: 'Lille', CP: '59000'},
    infos: ''    
  },
  {
    matricule: '2',
    email: 'roger@truc.com',
    prenom: 'Roger',
    nom: 'Martin',    
    adresse: {rue: '12 rue de Paris',  ville: 'Antony', CP: '92160'},
    infos: ''
  },
  {
    matricule: '3',
    email: 'alice@truc.com',
    prenom: 'Alice',
    nom: 'Pommier',    
    adresse: {rue: '48 boulevard Pasteur',  ville: 'Marcq-en-Baroeul', CP: '59700'},
    infos: ''
  },
];

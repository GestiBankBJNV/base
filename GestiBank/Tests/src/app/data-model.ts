export class Conseiller {
  id = 0;
  name = '';
  email = '';
  adresses: Adresse[];
}

export class Adresse {
	rue = "";
  	ville  = "";
  	CP  = ""; 
  
}

export const conseillers: Conseiller[] = [
  {
    id: 1,
    name: 'Whirlwind',
    email: 'machin@truc.com',
    adresses: [
      {rue: '123 Main',  ville: 'Anywhere', CP: '94801'},
      {rue: '456 Maple', ville: 'Somewhere', CP: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    email: 'machin2@truc.com',
    adresses: [
      {rue: '789 Elm',  ville: 'Smallville', CP: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    email: 'machin3@truc.com',
    adresses: [ ]
  },
];

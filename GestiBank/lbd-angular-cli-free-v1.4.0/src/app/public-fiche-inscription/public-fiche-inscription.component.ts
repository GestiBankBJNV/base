import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Client, DemandeInscription } from '../data-model';
import { DemandeService }           from '../demande-service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'public-fiche-inscription',
  templateUrl: './public-fiche-inscription.component.html',
  styleUrls: ['./public-fiche-inscription.component.scss']
})
export class PublicFicheInscriptionComponent implements OnInit {

  	@Output() onCreate = new EventEmitter<boolean>();

	formulaire: FormGroup;
  	nameChangeLog: string[] = [];
  	client: Client;

  	notif: NotificationsComponent = new NotificationsComponent();  

	constructor(private fb: FormBuilder, private demandeService: DemandeService) { 
    	/* Création du formulaire */
		this.createForm();
    	/* Méthode pour modifier le formulaire ?? */
    	this.logNameChange();
	}

  ngOnInit() {
  }

  /* Création du formulaire contenant les données du conseiller */
  createForm() {
  	this.formulaire = this.fb.group({		
  		prenom: ['', Validators.required ],
  		nom: ['', Validators.required ],
      	nomUtilisateur: ['', Validators.required ],
      	mdp: ['', [Validators.required, Validators.minLength(6)]],
      	email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      	numTel: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]+")]],
      	adresse: ['', Validators.required ],
      	cp: ['', Validators.required ],
      	ville: ['', Validators.required ],
      	situationMatrimoniale: [''], // select
      	nbEnfants: ['']
  	});
  }

  /* Modification du formulaire contenant les données du conseiller */
  ngOnChanges(){
  }

  // Modifier la fiche
  logNameChange(){
    const nameControl = this.formulaire.get('nom');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  /* Méthode utilisée lors de la soumission du formulaire avec le bouton créer/modifier */
  onSubmit() {
    if(this.formulaire.valid){
     	/* Récupération des données du formulaire */
      	this.client = this.prepareSaveClient();

     	let demandeInscr: DemandeInscription = {
     		id: undefined,
     		dateInscription: new Date(),
     		dateAffectation: undefined,
     		statut: 'non affectée',
     		coordonnees: this.client,
     	};

	    this.demandeService.addDemandeInscription(demandeInscr).subscribe();
	    this.onCreate.emit(); // on dit au composant parent que la fiche a été créée
	    // Notifier la création
	    this.notif.showNotificationMessage('top', 'right', 'Inscription enregistrée !', 'success', 'pe-7s-add-user');  
      
      	this.ngOnChanges(); 
    } else if(this.formulaire.get('email').invalid) {
      this.notif.showNotificationMessage('top', 'right', 'Erreur : email non valide', 'danger', 'pe-7s-close-circle'); 
    } else if(this.formulaire.get('numTel').invalid){
      this.notif.showNotificationMessage('top', 'right', 'Erreur : numéro de téléphone non valide', 'danger', 'pe-7s-close-circle'); 
    } else if (this.formulaire.invalid) {
      this.notif.showNotificationMessage('top', 'right', 'Veuillez remplir tous les champs obligatoires', 'danger', 'pe-7s-close-circle');
    }
  }

  /* Enregistrement des données du formulaire dans un objet Conseiller*/
  prepareSaveClient(): Client { // Préparation pour sauvegarder grace au conseiller-service
    const formModel = this.formulaire.value;

    const saveClient: Client = {
      prenom: formModel.prenom as string,
      nom: formModel.nom as string,
      nomUtilisateur: formModel.nomUtilisateur as string,
      password: formModel.mdp as string,
      email: formModel.email as string,
      numTel: formModel.numTel,
      adresse: formModel.adresse,
      cp: formModel.cp,
      ville: formModel.ville,
      nbEnfants : formModel.nbEnfants,
      situationMatrimoniale: formModel.situationMatrimoniale,
      comptes: [],
      statut: 'client',
      demandes: [],
      isClient: false,
      id: undefined
    };
    return saveClient;
  }

  /* Annuler les modifications du formulaire non enregistrées --> non utilisée...*/
  revert() { this.ngOnChanges(); }

}

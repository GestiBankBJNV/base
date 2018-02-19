import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Conseiller, conseillers, Client } from '../data-model';
import { ConseillerService }           from '../conseiller-service';
import { NotificationsComponent } from '../notifications/notifications.component';


@Component({
  selector: 'admin-fiche-conseiller',
  templateUrl: './admin-fiche-conseiller.component.html',
  styleUrls: ['./admin-fiche-conseiller.component.scss']
})
export class AdminFicheConseillerComponent implements OnInit {

	@Input() conseiller: Conseiller;
  @Input() creer: boolean;
  @Output() onCreate = new EventEmitter<boolean>();
  @Output() onDelete = new EventEmitter<boolean>();

	formulaire: FormGroup;
  nameChangeLog: string[] = [];

  notif: NotificationsComponent = new NotificationsComponent();
  today = new Date();
  

	constructor(private fb: FormBuilder, private conseillerService: ConseillerService) { 
    /* Création du formulaire */
		this.createForm();
    /* Méthode pour modifier le formulaire ?? */
    this.logNameChange();
		// methode pour modifier une valeur du formulaire, utiliser setValue pour obliger le renseignement de tous les champs
  	/*this.formulaire.patchValue({
			email: 'jeanne2@truc.com'
	});*/
	}

  ngOnInit() {
  }

  /* Création du formulaire contenant les données du conseiller */
  createForm() {
  	this.formulaire = this.fb.group({
  		matricule: '',		
  		prenom: ['', Validators.required ],
  		nom: ['', Validators.required ],
      nomUtilisateur: ['', Validators.required ],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      numTel: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]+")]],
      dateDebutContrat: ['', Validators.required] // https://stackoverflow.com/questions/37055311/angular2-how-to-use-javascript-date-object-with-ngmodel-two-way-binding/37055451#37055451
  	});
  }

  /* Modification du formulaire contenant les données du conseiller */
  ngOnChanges(){
    this.formulaire.reset({
      matricule: this.conseiller.matricule,
      prenom: this.conseiller.prenom,
      nom: this.conseiller.nom,
      nomUtilisateur: this.conseiller.nomUtilisateur,
      mdp: this.conseiller.password,
      email: this.conseiller.email, 
      numTel: this.conseiller.numTel,
      dateDebutContrat: this.conseiller.dateDebutContrat/*.toLocaleDateString()*/      
    });
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
      this.conseiller = this.prepareSaveConseiller();
      var temp = this.conseiller.matricule + ' : ' + this.conseiller.prenom + ' ' + this.conseiller.nom;
      if(!this.creer) { // on fait juste une modif        
        this.conseillerService.updateConseiller(this.conseiller).subscribe();  
        // Notifier les modifs
        this.notif.showNotificationMessage('top', 'right', 'Modifications effectuées', 'warning', 'pe-7s-magic-wand');        
      }
      if(this.creer) { // on crée un conseiller
        this.conseillerService.addConseiller(this.conseiller);
        this.onCreate.emit(); // on dit au composant parent que la fiche a été créée
        // Notifier la création
        this.notif.showNotificationMessage('top', 'right', 'Création du conseiller ' + this.conseiller.prenom + ' ' + this.conseiller.nom, 'success', 'pe-7s-add-user');  
      }
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
  prepareSaveConseiller(): Conseiller { // Préparation pour sauvegarder grace au conseiller-service
    const formModel = this.formulaire.value;

    const saveConseiller: Conseiller = {
      id: this.conseiller.id,
      matricule: this.conseiller.matricule,
      prenom: formModel.prenom as string,
      nom: formModel.nom as string,
      nomUtilisateur: formModel.nomUtilisateur as string,
      password: formModel.mdp as string,
      email: formModel.email as string,
      numTel: formModel.numTel,
      statut: 'conseiller',
      dateDebutContrat: formModel.dateDebutContrat, // non modifiable si conseiller existe
      clients: this.conseiller.clients || [],
      demandesInscription: this.conseiller.demandesInscription || []
    };
    return saveConseiller;
  }

  /* Annuler les modifications du formulaire non enregistrées --> non utilisée...*/
  revert() { this.ngOnChanges(); }

  /* Méthode pour supprimer un conseiller */
  supprConseiller() {
    var temp = this.conseiller.matricule + ' : ' + this.conseiller.prenom + ' ' + this.conseiller.nom;
    this.conseillerService.deleteConseiller(this.conseiller.matricule);
    // enlever la fiche
    this.onDelete.emit();
    // Notifier la suppression
    this.notif.showNotificationMessage('top', 'right', 'Suppression du conseiller ' + temp, 'danger', 'pe-7s-delete-user');        
  }
}

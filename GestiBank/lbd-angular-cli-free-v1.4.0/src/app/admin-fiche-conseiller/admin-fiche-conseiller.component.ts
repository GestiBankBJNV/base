import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Adresse, Conseiller, conseillers, Client } from '../data-model';
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
  

	constructor(private fb: FormBuilder, private conseillerService: ConseillerService) { 

		this.createForm();
    this.logNameChange();
		// methode pour modifier une valeur du formulaire, utiliser setValue pour obliger le renseignement de tous les champs
  	/*this.formulaire.patchValue({
			email: 'jeanne2@truc.com'
	});*/
	}

  ngOnInit() {
  }

  // Création du formulaire contenant les données du conseiller : à remplir avec les valeurs de la base de données en fonction du conseiller choisi
  createForm() {
  	this.formulaire = this.fb.group({
  		matricule: '',		
  		prenom: '',
  		nom: ['', Validators.required ],
      email: '', // TODO : Pour vérifier si une adresse email correcte a été entrée, voir tuto Dynamic Forms sur angular.io
  		adresse: this.fb.group(new Adresse()), 
      numTel: ''
  	});
  }

  ngOnChanges(){
      this.formulaire.reset({
        matricule: this.conseiller.matricule,
        prenom: this.conseiller.prenom,
        nom: this.conseiller.nom,
        email: this.conseiller.email,
        adresse: this.conseiller.adresse || new Adresse(), 
        numTel: this.conseiller.numTel      
      }); 
  }

  // Modifier la fiche
  logNameChange(){
    const nameControl = this.formulaire.get('nom');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  onSubmit() {
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
        this.notif.showNotificationMessage('top', 'right', 'Création du conseiller ' + temp, 'success', 'pe-7s-add-user');  
        // TODO : empecher la création d'un conseiller vide
      }
      this.ngOnChanges();   
       
    }

   prepareSaveConseiller(): Conseiller { // Préparation pour sauvegarder grace au conseiller-service
      const formModel = this.formulaire.value;

      const saveConseiller: Conseiller = {
        id: this.conseiller.id,
        matricule: this.conseiller.matricule,
        prenom: formModel.prenom as string,
        nom: formModel.nom as string,
        nomUtilisateur: this.conseiller.nomUtilisateur, // todo : rajouter dans le formulaire 
        password: this.conseiller.password,
        email: formModel.email as string,
        adresse: formModel.adresse,
        numTel: formModel.numTel,
        dateDebutContrat: this.conseiller.dateDebutContrat, // todo : rajouter dans le formulaire 
        clients: this.conseiller.clients || [],
        demandes: this.conseiller.demandes || []
      };

      return saveConseiller;
    }

    revert() { this.ngOnChanges(); }

    supprConseiller() {
      var temp = this.conseiller.matricule + ' : ' + this.conseiller.prenom + ' ' + this.conseiller.nom;
      this.conseillerService.deleteConseiller(this.conseiller);
      // enlever la fiche
      this.onDelete.emit();
      // Notifier la suppression
      this.notif.showNotificationMessage('top', 'right', 'Suppression du conseiller ' + temp, 'danger', 'pe-7s-delete-user');        
    }

}

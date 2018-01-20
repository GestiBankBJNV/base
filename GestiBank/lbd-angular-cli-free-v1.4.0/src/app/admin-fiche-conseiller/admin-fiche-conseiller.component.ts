import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Adresse, Conseiller, conseillers } from '../data-model';
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
      email: '',
  		adresse: this.fb.group(new Adresse()),
  		infos: '' // à mettre la liste des clients
  	});
  }

  ngOnChanges(){
      /*console.log(this.conseiller.adresse);*/
      this.formulaire.reset({
        matricule: this.conseiller.matricule,
        prenom: this.conseiller.prenom,
        nom: this.conseiller.nom,
        email: this.conseiller.email,
        adresse: this.conseiller.adresse || new Adresse(),
        infos: ''
      }); 
      /*console.log(this.formulaire);*/
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
        this.notif.showNotificationMessage('top', 'right', 'Création du conseiller ' + temp, 'success', 'pe-7s-magic-wand');  
        // TODO : empecher la création d'un conseiller vide
      }
      this.ngOnChanges();   
       
    }

   prepareSaveConseiller(): Conseiller {
      const formModel = this.formulaire.value;

      const saveConseiller: Conseiller = {
        matricule: this.conseiller.matricule,
        prenom: formModel.prenom as string,
        nom: formModel.nom as string,
        email: formModel.email as string,
        adresse: formModel.adresse,
        infos: ''
      };

      return saveConseiller;
    }

    revert() { this.ngOnChanges(); }

    supprConseiller() {
      var temp = this.conseiller.matricule + ' : ' + this.conseiller.prenom + ' ' + this.conseiller.nom;
      this.conseillerService.deleteConseiller(this.conseiller);
      // Tenlever la fiche
      this.onDelete.emit();
      // Notifier la suppression
      this.notif.showNotificationMessage('top', 'right', 'Suppression du conseiller ' + temp + ' effectuée', 'danger', 'pe-7s-magic-wand');   

    }

}

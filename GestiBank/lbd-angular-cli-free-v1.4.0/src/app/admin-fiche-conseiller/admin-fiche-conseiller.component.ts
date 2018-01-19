import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Adresse, Conseiller, conseillers } from '../data-model';
import { ConseillerService }           from '../conseiller-service';



@Component({
  selector: 'admin-fiche-conseiller',
  templateUrl: './admin-fiche-conseiller.component.html',
  styleUrls: ['./admin-fiche-conseiller.component.scss']
})
export class AdminFicheConseillerComponent implements OnInit {

	@Input() conseiller: Conseiller;

	formulaire: FormGroup;
  nameChangeLog: string[] = [];

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
  		/*username: '',*/  		
  		prenom: '',
  		nom: ['', Validators.required ],
      email: '',
  		adresse: this.fb.group(new Adresse()),
  		infos: '' // à mettre la liste des clients
  	});
  }

  ngOnChanges(){
      this.formulaire.reset({
        matricule: this.conseiller.matricule,
        prenom: this.conseiller.prenom,
        nom: this.conseiller.nom,
        email: this.conseiller.email,
        adresse: this.conseiller.adresse || new Adresse(),
        infos: ''
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
      this.conseillerService.updateConseiller(this.conseiller).subscribe();
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

}

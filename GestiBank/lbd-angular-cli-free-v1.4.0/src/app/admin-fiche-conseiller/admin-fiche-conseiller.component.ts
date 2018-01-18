import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Adresse, Conseiller } from '../data-model';

@Component({
  selector: 'app-admin-fiche-conseiller',
  templateUrl: './admin-fiche-conseiller.component.html',
  styleUrls: ['./admin-fiche-conseiller.component.scss']
})
export class AdminFicheConseillerComponent implements OnInit {

	@Input() conseiller: Conseiller;

	formulaire: FormGroup;

  	constructor(private fb: FormBuilder) { 

  		this.createForm();

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
  		matricule: '0012545',
  		username: '',
  		email: '',
  		prenom: '',
  		nom: ['', Validators.required ],
  		adresse: '',
  		ville: '',
  		pays: '',
  		cp: '',
  		infos: '' // à mettre la liste des clients
  	});
  }

}

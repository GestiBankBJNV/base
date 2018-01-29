import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Adresse, Conseiller, conseillers } from '../data-model';
import { ConseillerService }           from '../conseiller-service';



@Component({
  selector: 'conseiller-detail',
  templateUrl: './conseiller-detail.component.html',
  styleUrls: ['./conseiller-detail.component.css']
})

export class ConseillerDetailComponent implements OnInit, OnChanges {

    @Input() conseiller: Conseiller;

    formulaire: FormGroup;
    nameChangeLog: string[] = [];

    constructor(private fb: FormBuilder, private conseillerService: ConseillerService) { 	  	

	  	this.createForm();
	  	this.logNameChange();
    }

    ngOnInit() {
    }

    createForm() {
	  	this.formulaire = this.fb.group({
	  		name: ['', Validators.required ],
	  		email: '',
	  		adresse: this.fb.group(new Adresse())
	  	});
    }

	ngOnChanges(){
	  	this.formulaire.reset({
	  		name: this.conseiller.name,
	  		email: this.conseiller.email,
	  		adresse: this.conseiller.adresses[0] || new Adresse()
	  	}); 
	}

  // Modifier la fiche
  	logNameChange(){
  		const nameControl = this.formulaire.get('name');
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
  			id: this.conseiller.id,
  			name: formModel.name as string,
  			email: formModel.email as string,
  			adresses: [formModel.adresse]
  		};

  		return saveConseiller;
  	}

  	revert() { this.ngOnChanges(); }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})

export class FormTestComponent implements OnInit {

  formulaire: FormGroup;

  constructor(private fb: FormBuilder) { 
  	this.createForm();
  	this.formulaire.setValue({
    	name:    'Jeanne',
    	mdp: 'monMdp'
    });
    this.formulaire.patchValue({
  		mdp: 'nouveauMdp'
	});
  }

  ngOnInit() {
  }

  createForm() {
  	this.formulaire = this.fb.group({
  		name: ['', Validators.required ],
  		mdp: ''
  	});
  }

  

}

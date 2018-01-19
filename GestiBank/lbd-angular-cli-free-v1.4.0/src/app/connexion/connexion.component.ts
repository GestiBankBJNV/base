import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ROUTES, ROUTES_PUBLIC } from './../sidebar/sidebar.component';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

	formGroupLogin: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  	// this.formGroupLogin = new FormGroup({
  	// 	emailLogin: new FormControl(),
  	// 	passwordLogin: new FormControl()
  	//});

  	this.formGroupLogin = this.fb.group({
  		emailLogin: ['', Validators.required],
  		passwordLogin: ['', Validators.required]
  	})

  	
}
  verifLogin(){

  }

}

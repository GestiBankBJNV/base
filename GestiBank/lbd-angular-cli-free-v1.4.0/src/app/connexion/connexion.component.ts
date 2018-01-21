import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ROUTES, ROUTES_PUBLIC } from './../sidebar/sidebar.component';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  // création d'utilisateur pour les tests
  utilisateurs = [
                     {user: 'nassim', password: '1234', status: 'client'},
                     {user: 'brice', password: '1234', status: 'admin'},
                     {user: 'victorien', password:'1234', status: 'conseiller'},
                     {user: 'jeanne', password:'1234', status: 'client'}
                ];


  // regupération du submit du formulaire Login
	formGroupLogin: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    // Rend les champs du login (user et password obligatoire)
  	this.formGroupLogin = this.fb.group({

                        //rend les champs obligatoires
  		emailLogin: ['', Validators.required],
  		passwordLogin: ['', Validators.required]

  	})  	
}

  verifLogin(email, password){
    

    for(let utilisateur of this.utilisateurs){

      if (email === utilisateur.user && password === utilisateur.password) {

        this.router.navigate([utilisateur.status + '_accueil']);
       
          break; // sortie de la boucle si l'utilisateur et le mot de passe existe
      }
    }
   
  }

}

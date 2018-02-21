import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ROUTES, ROUTES_PUBLIC } from './../sidebar/sidebar.component';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { Utilisateur } from '../data-model';
import { Observable } from 'rxjs/Observable';
import { ConseillerService } from '../conseiller-service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  utilisateur: Utilisateur;

  // création d'utilisateurs pour les tests
  /*utilisateurs = [
                     {user: 'nassim', password: '1234', status: 'client'},
                     {user: 'brice', password: '1234', status: 'admin'},
                     {user: 'victorien', password:'1234', status: 'conseiller'},
                     {user: 'jeanne', password:'1234', status: 'client'}
                ];*/


  // regupération du submit du formulaire Login
	formGroupLogin: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private cs: ConseillerService) { }

  ngOnInit() {

    // Rend les champs du login (user et password obligatoire)
  	this.formGroupLogin = this.fb.group({

                        //rend les champs obligatoires
  		emailLogin: ['', Validators.required],
  		passwordLogin: ['', Validators.required]

  	})  	
}

  // vérification de l'user + redirection vers le bon composant
  verifLogin(email, password){

    this.cs.getUtilisateur(email,password).subscribe(user => {
      this.utilisateur = user;
    this.router.navigate([this.utilisateur.statut + '_accueil']);

    });

    


        //this.router.navigate([utilisateur.status + '_accueil']);
       
     
   
  }

}

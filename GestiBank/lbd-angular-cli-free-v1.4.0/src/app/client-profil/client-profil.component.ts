
import { Component, OnInit } from '@angular/core';
import { showNotification } from '../data-model';
import { Client } from '../classes/client';
import { CLIENT } from '../classes/FAKES';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;


@Component({
  selector: 'app-client-profil',
  templateUrl: './client-profil.component.html',
  styleUrls: ['./client-profil.component.scss']
})
export class ClientProfilComponent implements OnInit {

  //Client (bouchon)
	client : Client = CLIENT;

  //Formulaire
  userForm: FormGroup;

  //CONSTRUCTEUR
  constructor(private fb: FormBuilder, private router : Router) { }

  ngOnInit() {
    //this.sub = this.route.params.subscribe(params => { this.id = params['id']; })//Récupérer l'id du client depuis l'url?

    this.userForm = new FormGroup({
      username : new FormControl({value: '',disabled: true}, Validators.required),//non-modifiables
      password : new FormControl({value: '',disabled: true}, Validators.required),
      lastname : new FormControl({value: '',disabled: true}, Validators.required),
      firstname : new FormControl({value: '',disabled: true}, Validators.required),
      company : new FormControl(''),//Optionel
      address : new FormControl('', Validators.required),
      city : new FormControl('', Validators.required),
      zipcode : new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      phone : new FormControl(''),//Optionel
      email : new FormControl('', [Validators.required, Validators.pattern("[^@]*@[^@]*")])
    });

    //if (this.id){
      //this.userService.findById(this.id).subscribe(
        //user => {
          //this.id = user.id;
          this.userForm.patchValue({
            username: this.client.username,
            password: this.client.password,
            lastname: this.client.nom,
            firstname: this.client.prenom,
            company: this.client.entreprise,
            address: this.client.adresse,
            city: this.client.ville,
            zipcode: this.client.codePostal,
            country: this.client.pays,
            phone: "0606060606",
            email: this.client.mail,
          });
        //}, error => {
          //console.log(error);
        //}
      //);
    //}


  }
  
  onSubmit(){
    let msg = "Une demande de modification de profil a été envoyée à votre conseiller. Elle sera traitée dès que possible";

    //TODO: Update Client
    //Ajouter notification
    this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});
    showNotification('top','center',msg, 'info', "pe-7s-mail-open-file");
    this.redirectUserPage();
  }
  
  redirectUserPage(){
    this.router.navigate(['/client_accueil']);
  }
}

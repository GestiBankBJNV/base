
import { Component, OnInit } from '@angular/core';
import { Client, DemandeModif, Notification,showNotification } from '../data-model';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client-service';
import { NotificationService } from '../notification-service';
import { DemandeService } from '../demande-service';

declare var $:any;


@Component({
  selector: 'app-client-profil',
  templateUrl: './client-profil.component.html',
  styleUrls: ['./client-profil.component.scss'],
  providers: [ClientService, DemandeService, NotificationService]
})
export class ClientProfilComponent implements OnInit {

  //Client (bouchon)
	clientID : number = 1;
  client : Client;

  //Formulaire
  userForm: FormGroup;

  //CONSTRUCTEUR
  constructor(private fb: FormBuilder, private router : Router, private clientService : ClientService, private notificationService : NotificationService, private demandeService : DemandeService) { }

  ngOnInit() {
    //this.sub = this.route.params.subscribe(params => { this.id = params['id']; })//Récupérer l'id du client depuis l'url?

    this.userForm = new FormGroup({
      username : new FormControl({value: '',disabled: true}, Validators.required),//non-modifiables
      password : new FormControl({value: '',disabled: true}, Validators.required),
      lastname : new FormControl({value: '',disabled: true}, Validators.required),
      firstname : new FormControl({value: '',disabled: true}, Validators.required),
      mat : new FormControl(''),//Optionel
      address : new FormControl('', Validators.required),
      city : new FormControl('', Validators.required),
      zipcode : new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      phone : new FormControl(''),//Optionel
      email : new FormControl('', [Validators.required, Validators.pattern("[^@]*@[^@]*")])
    });

    
      this.clientService.getClientById(this.clientID).subscribe(
        client => {
          this.client = client;
          this.userForm.patchValue({
            username: this.client.nomUtilisateur,
            password: this.client.password,
            lastname: this.client.nom,
            firstname: this.client.prenom,
            mat: this.client.situationMatrimoniale,
            address: this.client.adresse,
            city: this.client.ville,
            zipcode: this.client.cp,
            country: "France",
            phone: this.client.numTel,
            email: this.client.email,
          });
        }, error => {
          console.log(error);
        });
    


  }
  
  onSubmit(){
     let msg : string = "Une demande de modification de profil a été envoyée à votre conseiller. Elle sera traitée dès que possible";
      
      //ajout d'une notification
      let notif : Notification = {id: -1, message : msg, date : new Date(), type: "info", toggled : false};

      this.notificationService.addNotificationToClient(this.clientID, notif).subscribe(notif=> {
          //Envoi de la demande
          this.client.comptes = [];
          console.log("Notification créée");          
          let demande : DemandeModif = { id: -1, date: new Date(), dateAffectation: null, statut: "client", coordonnees: this.client, libelle: "Demande de modification" };
          this.demandeService.sendDemandeModif(this.clientID, demande).subscribe(any => {
            console.log("demande envoyée");
          });
        });     
      
      //affichage d'un popup dans le navigateur
      showNotification('top','center',msg, notif.type, "pe-7s-mail-open-file");//On affiche une notif sur la page

    this.redirectUserPage();
  }
  
  redirectUserPage(){
    this.router.navigate(['/client_accueil']);
  }
}

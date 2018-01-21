import { Component, OnInit } from '@angular/core';
import { TablesComponent } from '../tables/tables.component'

declare interface TableData {
    headerRow: string[];
    dataRows: any[][];
}

@Component({
  selector: 'app-admin-affectations',
  templateUrl: './admin-affectations.component.html',
  styleUrls: ['./admin-affectations.component.scss']
})
export class AdminAffectationsComponent implements OnInit {

	public tableData: TableData;
	private affecter: boolean = false;
	private modifier: boolean = false;
  private trieCroissantDemande : boolean = true;
  private trieCroissantAffectation : boolean = true;

  	constructor() { }

  	ngOnInit() {
  	  this.recupTable(); // cette table devra être récupérée depuis une BDD : ici on utilise une méthode          	    
  	}

    recupTable(){
      this.tableData = { // TODO : formatage des dates pour le tri
            headerRow: [ 'ID', 'Nom', 'Ville', 'Date de demande', "Date d'affectation", 'Statut'], /* A faire : trier les demandes par date de demande ou d'affectation en cliquant sur le header de la colonne */
            dataRows: [        
                ['1', 'Dakota Rice', 'Oud-Turnhout', new Date(2018,0,15), undefined, ''],
                ['2', 'Minerva Hooper', 'Sinaai-Waas', new Date(2017,11,5), new Date(2017,6,12), 'traitée'],
                ['3', 'Sage Rodriguez', 'Baileux', new Date(2018,0,7), undefined, ''],
                ['4', 'Philip Chaney', 'Overland Park', new Date(2018,0,9), new Date(2018,0,11), 'en cours'],
                ['5', 'Doris Greene', 'Feldkirchen in Kärnten', new Date(2018,0,13), undefined, ''],
                ['6', 'Mason Porter', 'Gloucester', new Date(2018,0,10), undefined, '']
            ],

        };      
    }

    filtrerDemandes(filtre: string){
      this.recupTable();
      //On parcours la table en decroissance pour eviter l auto modification des index
       for (var i=this.tableData.dataRows.length -1; i>=0; i--){         
         if(filtre == 'affectee' && this.tableData.dataRows[i][4] == undefined){           
           this.tableData.dataRows.splice(i, 1);           
         } else if (filtre == 'nonAffectee' && this.tableData.dataRows[i][4] != undefined){           
           this.tableData.dataRows.splice(i, 1);   
         } else if (filtre == 'enCours' && this.tableData.dataRows[i][5] != 'en cours') {
           this.tableData.dataRows.splice(i, 1);
         } else if (filtre == 'traitee' && this.tableData.dataRows[i][5] != 'traitée') {
           this.tableData.dataRows.splice(i, 1);
         }
       }
    }

    trierDateDemande(){
      this.trierDate(3, this.trieCroissantDemande);
      this.trieCroissantDemande = !this.trieCroissantDemande;
    }

    trierDateAffectation(){
      this.trierDate(4, this.trieCroissantAffectation);
      this.trieCroissantAffectation = !this.trieCroissantAffectation;
    }

    trierDate(numColonne : number, isCroissant: boolean){
      this.tableData.dataRows.sort();
      var tableTemp = [];
          for (var i=0; i<this.tableData.dataRows.length; i++){         
             tableTemp[i] = [this.dateStringify(this.tableData.dataRows[i][numColonne]), this.tableData.dataRows[i][0]];
         }
      if(isCroissant){
        tableTemp.sort();
      } else {
        tableTemp.sort((a , b) =>  a < b ? 1 : -1);
      }
      debugger;
      for(var i = 0 ; i <tableTemp.length; i++){
        for (var j=0; j<this.tableData.dataRows.length; j++){
          if(tableTemp[i][1] === this.tableData.dataRows[j][0]) {        
             tableTemp[i] = this.tableData.dataRows[j];
             break;
           }
         }
      }
      this.tableData.dataRows = tableTemp;
    }

    dateStringify(date : Date){
      if(date == undefined){
        return '00000000';
      }

      var month = date.getMonth() < 10 ? '0' + date.getMonth() : '' + date.getMonth();
      var day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
      console.log('' + date.getFullYear() + month + day);
      return '' + date.getFullYear() + month + day;
    }
}

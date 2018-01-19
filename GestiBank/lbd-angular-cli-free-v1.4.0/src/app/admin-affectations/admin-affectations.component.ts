import { Component, OnInit } from '@angular/core';
import { TablesComponent } from '../tables/tables.component'

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-admin-affectations',
  templateUrl: './admin-affectations.component.html',
  styleUrls: ['./admin-affectations.component.scss']
})
export class AdminAffectationsComponent implements OnInit {

	public tableData1: TableData;
	private affecter: boolean = false;
	private modifier: boolean = false;

  	constructor() { }

  	ngOnInit() {
  	this.tableData1 = {
          	headerRow: [ 'ID', 'Nom', 'Ville', 'Date de demande', "Date d'affectation", 'Statut'], /* A faire : trier les demandes par date de demande ou d'affectation en cliquant sur le header de la colonne */
          	dataRows: [
              	['1', 'Dakota Rice', 'Oud-Turnhout', '12/01/18', '', ''],
              	['2', 'Minerva Hooper', 'Sinaai-Waas', '05/12/17', '07/12/17', 'traitée'],
              	['3', 'Sage Rodriguez', 'Baileux', '10/01/18', '', ''],
              	['4', 'Philip Chaney', 'Overland Park', '09/01/18', '11/01/18', 'en cours'],
              	['5', 'Doris Greene', 'Feldkirchen in Kärnten', '13/01/18', '', ''],
              	['6', 'Mason Porter', 'Gloucester', '10/01/18', '', '']
          	]
      	};
      
  	}

}

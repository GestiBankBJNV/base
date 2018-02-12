import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './public-devises.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-public-devises',
  templateUrl: './public-devises.component.html',
  styleUrls: ['./public-devises.component.scss'],
  providers: [CurrencyService]
})
export class PublicDevisesComponent implements OnInit {

	currenciesFrom : string[] = [];		//Devises disponibles (entree)
	currencyFrom : string = "EUR";		//Conversion de
	currenciesTo : string[] = [];		//Devises disponibles (sortie)
	currencyTo : string = "USD";		//Vers
	rates : string;						//Taux de conversion
	inputValue : number = 1;			//Valeur d'entrée
	convertedValue : number = 0;		//Valeur de sortie

	//CONSTRUCTEUR
  constructor(private currencyService : CurrencyService) { 
  }

  	//INITIALISATION
  ngOnInit() {
  	this.refreshCurrenciesInput();
  	this.refreshCurrenciesOutput();
  }

  //Rafraichir les listes de devises d'entrée, et les taux de conversion
  refreshCurrenciesInput(){
	let sub : Subscription = this.currencyService.getConversionRates(this.currencyFrom).subscribe(currency => {	
		this.currenciesFrom = Object.keys(currency.rates); 
		this.rates = currency.rates;
		this.refreshConvertedValue();
	});	
  }

  //rafraichir la liste de devises de sortie
  refreshCurrenciesOutput(){
	let sub : Subscription = this.currencyService.getConversionRates(this.currencyTo).subscribe(currency => { 
		this.currenciesTo = Object.keys(currency.rates);
		this.refreshConvertedValue();
	});	
  }
  
  //rafraichir la valeur convertie
  refreshConvertedValue(){
  	let rate : number = this.rates[this.currencyTo];
  	this.convertedValue = this.inputValue * rate;
  }

}


//Classe utilisée pour récupérer des informations depuis fixer.io (service de conversion de devises)
export class Currency{
	base : string;		//Devise de base
	date : string;		//Date de l'actualisation du taux
	rates : string;		//

	constructor(base : string, date : string, rates : string) {
		this.base = base;
		this.date = date;
		this.rates = rates;
	}
}
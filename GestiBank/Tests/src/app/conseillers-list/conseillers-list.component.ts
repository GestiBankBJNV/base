import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Conseiller }        from '../data-model';
import { ConseillerService } from '../conseiller-service';

@Component({
  selector: 'conseillers-list',
  templateUrl: './conseillers-list.component.html',
  styleUrls: ['./conseillers-list.component.css']
})
export class ConseillersListComponent implements OnInit {
  conseillers: Observable<Conseiller[]>;
  isLoading = false;
  selectedConseiller: Conseiller;

  conseillerRecherche: string = '';

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() { this.getConseillers(); }

  getConseillers() {
    this.isLoading = true;
    this.conseillers = this.conseillerService.getConseillers()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedConseiller = undefined;
  }

  select(conseiller: Conseiller) { this.selectedConseiller = conseiller; } 

  clicRechercher() {
      this.isLoading = true;
      console.log('recherche du conseiller ' + this.conseillerRecherche);
      this.conseillers = this.conseillerService.getConseillersByName(this.conseillerRecherche)
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
  }
}
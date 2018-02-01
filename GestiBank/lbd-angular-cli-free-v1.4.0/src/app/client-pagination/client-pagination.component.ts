import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-pagination',
  templateUrl: './client-pagination.component.html',
  styleUrls: ['./client-pagination.component.scss']
})
export class ClientPaginationComponent implements OnInit {
	@Input() page: number; // page actuelle
	@Input() count: number; // Nombre de page total
	@Input() perPage: number; // nombre d'éléments par page
	@Input() pagesToShow: number; // Nombre de page entre Suivant/précédent
	@Input() loading: boolean; // Vérifie si le contenu est en cours de chargement

	@Output() goPrev = new EventEmitter<boolean>();
	@Output() goNext = new EventEmitter<boolean>();
	@Output() goPage = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

}

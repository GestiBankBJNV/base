import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-pagination',
  templateUrl: './client-pagination.component.html',
  styleUrls: ['./client-pagination.component.scss']
})
export class ClientPaginationComponent implements OnInit {
  @Input() page: number;               // page actuelle
	@Input() count: number;              // Nombre d'éléments total
	@Input() perPage: number;            // nombre d'éléments par page
	@Input() pagesToShow: number;        // Nombre de page entre Suivant/précédent

	@Output() goPrev = new EventEmitter<boolean>();
	@Output() goNext = new EventEmitter<boolean>();
	@Output() goPage = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	} 	

  //Aller à la page (event)
  onPage(n: number): void {
    this.goPage.emit(n);
  }

  //Page précédente (event)
  onPrev(): void {
   	this.goPrev.emit(true);
  }

  //Page suivante (event)
  onNext(next: boolean): void {
   	this.goNext.emit(next);
  }

  //Nombre de page
  totalPages(): number {
   	return Math.ceil(this.count / this.perPage) || 0;
  }

  //Vérifier si on est sur la dernière page
  lastPage(): boolean {
  	return this.perPage * this.page >= this.count;
  }

  //Liste des pages accessibles (entre les boutons précédent et suivant)
  getPages(): Number[] {
  	const pc = Math.ceil(this.count / this.perPage);
  	const dPages : Number[] = []; //pages affichées
  	for (let i = (this.page - this.pagesToShow); i < this.page; i++){
		  if (i >= 0){
		  	dPages.push(i);
		  } 
	  }
  	for (let i = this.page; i < (this.page + this.pagesToShow); i++){
	  	if (i < pc){
		  	dPages.push(i);
		  }
	  }    
    return dPages;
  }
}

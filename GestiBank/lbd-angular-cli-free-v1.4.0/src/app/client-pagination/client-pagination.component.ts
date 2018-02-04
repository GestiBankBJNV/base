import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-pagination',
  templateUrl: './client-pagination.component.html',
  styleUrls: ['./client-pagination.component.scss']
})
export class ClientPaginationComponent implements OnInit {
	@Input() page: number; // page actuelle
	@Input() count: number; // Nombre d'éléments total
	@Input() perPage: number; // nombre d'éléments par page
	@Input() pagesToShow: number; // Nombre de page entre Suivant/précédent
	@Input() loading: boolean; // Vérifie si le contenu est en cours de chargement

	@Output() goPrev = new EventEmitter<boolean>();
	@Output() goNext = new EventEmitter<boolean>();
	@Output() goPage = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}
 	
 	getMin(): number {
 	   return ((this.perPage * this.page) - this.perPage) + 1;
 	}

 	getMax(): number {
    	let max = this.perPage * this.page;
    	if (max > this.count) {
    	  max = this.count;
    	}
    	return max;
  	}

  	onPage(n: number): void {
    	this.goPage.emit(n);
  	}

  	onPrev(): void {
  		console.log("onPrev");
    	this.goPrev.emit(true);
  	}

  	onNext(next: boolean): void {
    	console.log("onNext page : " + this.page + ", count : " + this.count + ", perPage : " + this.perPage);
    	this.goNext.emit(next);
  	}

  	totalPages(): number {
    	return Math.ceil(this.count / this.perPage) || 0;
  	}

  	lastPage(): boolean {
   		return this.perPage * this.page >= this.count;
  	}

  	getPages(): Number[] {

  		const pc = Math.ceil(this.count / this.perPage);
  		const dPages : Number[] = []; //pages affichées
  		console.log("getPages");
  		for (let i = (this.page - this.pagesToShow); i < this.page; i++){
			if (i >= 0){
				dPages.push(i);
				console.log(i);			
			}
		}
		for (let i = this.page; i < (this.page + this.pagesToShow); i++){
			if (i < pc){
				dPages.push(i);
				console.log(i);			
			}
		}

		

    	/*const c = Math.ceil(this.count / this.perPage);
    	const p = this.page || 1;
    	const pagesToShow = this.pagesToShow || 9;
    	const pages: number[] = [];
    	pages.push(p);
    	const times = pagesToShow - 1;
    	for (let i = 0; i < times; i++) {
    	  if (pages.length < pagesToShow) {
        	if (Math.min.apply(null, pages) > 1) {
        	  pages.push(Math.min.apply(null, pages) - 1);
        	}
      	}
      	if (pages.length < pagesToShow) {
        	if (Math.max.apply(null, pages) < c) {
        	  pages.push(Math.max.apply(null, pages) + 1);
        	}
     	}
    	}
    	pages.sort((a, b) => a - b);*/
    	return dPages;
  	}
}

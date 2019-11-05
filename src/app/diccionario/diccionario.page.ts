import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diccionario',
	templateUrl: './diccionario.page.html'
})
export class DiccionarioPage implements OnInit {
	constructor() { }
	ngOnInit() {}
	termino;
	user = {
		primer_nombre: 'Juan',
		segundo_nombre: 'Alberto'
	}
	buscar(){
		console.log('Termino: '+(this.termino));
	}
}

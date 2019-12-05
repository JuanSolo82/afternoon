import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diccionario',
	templateUrl: './diccionario.page.html'
})
export class DiccionarioPage implements OnInit {
	
	constructor() { }
	ngOnInit() {}
	termino:string;
	buscar(){
		if (!this.termino.length)
			console.log("Debe ingresar término");
	}
}

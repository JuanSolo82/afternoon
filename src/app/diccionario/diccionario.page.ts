import { Component, OnInit } from '@angular/core';
import { TerminosService } from "../servicios/terminos.service";

@Component({
	selector: 'app-diccionario',
	templateUrl: './diccionario.page.html'
})
export class DiccionarioPage implements OnInit {
	
	constructor(public terminos: TerminosService) { }
	ngOnInit() {
		this.terminos.getTermino().subscribe( terminos => {
			terminos.map(termino => {
				console.log(termino.payload.doc.data());
			});
		});
	}
	termino:string;
	buscar(){
		if (!this.termino.length)
			console.log("Debe ingresar término");
	}
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
	providedIn: 'root'
})
export class TerminosService {
	constructor(private db: AngularFirestore) { }
	getTermino(){
		return this.db.collection('terminos').snapshotChanges();
	}
}

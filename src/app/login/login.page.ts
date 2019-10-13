import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../servicios/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: FormGroup;
	email: string;
	password: string;
	error_messages = {
		'email': [
			{ type: 'required', message: 'Email requerido' },
			{ type: 'minLength', message: 'Se requiere de 8 caracteres mínimo' },
			{ type: 'pattern', message: 'Formato incorrecto' }
		],
		'password': [
			{ type: 'required', message: 'Campo requerido' },
			{ type: 'minLength', message: 'Clave muy corta' }
		]
	}
	constructor(
		public formBuilder: FormBuilder,
		private authService: AuthService,
		public router: Router
	) {
		this.loginForm = this.formBuilder.group({
			password: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(4)
			])),
			email: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(8),
				Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$")
			]))
		});
	}

	ngOnInit() {
	}

	OnSubmitLogin(){
		console.log("funcion");
		this.authService.login(this.email, this.password).then(res => {
			this.router.navigate(['/home']);
		}).catch(err => console.error("error"));
	}

}

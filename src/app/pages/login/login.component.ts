import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private route: Router) {}

  login(){
    sessionStorage.setItem('user', this.username);
    sessionStorage.setItem('password', this.password);


    //implementar lógica de salvar válidar senhas
    this.route.navigate(['home']);

  }

}

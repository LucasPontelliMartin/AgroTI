import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuario: String;
  Senha: String;

  constructor() { }

  ngOnInit(): void {
  }

  acessar(){
    let user = this.Usuario;
    let senha = this.Senha;

    console.log("User:  ", user);
    console.log("senha:  ", senha);
  }

}

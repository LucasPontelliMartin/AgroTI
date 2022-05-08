import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any = null;
  searchModel: any = { Usuario: '', Senha: '' }
  mensagem = null;

  constructor(private _authentication : AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.buscaUsuario();
  }

  cadastrar(){
    this.router.navigate(['/usuario']);

  }

  perfil(){
    this.router.navigate(['/perfil']);

  }

  buscaUsuario(){
    this._authentication.get('cliente').subscribe(r => {
      console.log(r);
      this.mensagem = r.message;
      console.log(this.mensagem);
      if(r.isSuccess){
        this.usuarios = r.data;
      }
    });
  }

}

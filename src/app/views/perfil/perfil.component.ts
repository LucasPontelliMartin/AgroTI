import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any = null;
  searchModel: any = { Usuario: '', Senha: '' }
  mensagem = null;

  constructor(private _authentication : AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.buscaPerfil();
  }

  cadastrar(){
    this.router.navigate(['/usuario']);

  }

  buscaPerfil(){
    this._authentication.get('perfil').subscribe(r => {
      console.log(r);
      this.mensagem = r.message;
      console.log(this.mensagem);
      if(r.isSuccess){
        this.perfil = r.data;
      }
    });
  }

}

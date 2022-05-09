import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { UsuarioModalComponent } from './modal/usuario.modal.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any = null;
  searchModel: any = { Usuario: '', Senha: '' }
  mensagem = null;

  constructor(private _authentication : AuthenticationService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.buscaUsuario();
  }

  cadastrar(){
    this.router.navigate(['/usuario']);

  }

  cadastrarPerfil(){
    this.router.navigate(['/perfil']);

  }

  log(){

  }
  
  mapa(){
    this.router.navigate(['/mapa']);

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

  addUsuario(): void {
    const dialogRef = this.dialog.open(UsuarioModalComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

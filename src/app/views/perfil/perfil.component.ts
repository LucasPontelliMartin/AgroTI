import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { UsuarioModalComponent } from '../usuario/modal/usuario.modal.component';
import { PerfilModalComponent } from './modal/perfil.modal.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any = [];
  searchModel: any = { Usuario: '', Senha: '' }
  mensagem = null;

  constructor(private _authentication : AuthenticationService, private router: Router,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.buscaPerfil();
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

  
  addPerfil(): void {
    const dialogRef = this.dialog.open(PerfilModalComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscaPerfil();
    });
  }

deletar(usuario = null){
  this._authentication.delete('cliente/', usuario._id).subscribe(r => {
    console.log(r);
    this.mensagem = r.message;
  });
}

}

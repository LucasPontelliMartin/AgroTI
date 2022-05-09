import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-perfil.modal',
  templateUrl: './perfil.modal.component.html',
  styleUrls: ['./perfil.modal.component.css']
})
export class PerfilModalComponent implements OnInit {
  searchModel = {nome: '', identificador: Number};
  mensagem = null;

  constructor(private _authentication : AuthenticationService, public dialogRef: MatDialogRef<PerfilModalComponent>) {}

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

  salvar(){
    this._authentication.post('perfil/Cadastro', this.searchModel).subscribe(r => {
      console.log(r);
      this.mensagem = r.message;
    });
  }
}

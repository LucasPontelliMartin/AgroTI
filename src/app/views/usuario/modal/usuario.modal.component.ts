import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-usuario.modal',
  templateUrl: './usuario.modal.component.html',
  styleUrls: ['./usuario.modal.component.css']
})
export class UsuarioModalComponent implements OnInit {
  searchModel = {nome: '', email:'', dataNascimento: Date, usuario: '', senha:''};
  mensagem = null;

  constructor(private _authentication : AuthenticationService, public dialogRef: MatDialogRef<UsuarioModalComponent>) {}

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

  salvar(){
    this._authentication.post('cliente/Cadastro', this.searchModel).subscribe(r => {
      console.log(r);
      this.mensagem = r.message;
    });
  }
}

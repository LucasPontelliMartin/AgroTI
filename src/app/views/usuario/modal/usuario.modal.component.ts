import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario.modal',
  templateUrl: './usuario.modal.component.html',
  styleUrls: ['./usuario.modal.component.css']
})
export class UsuarioModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsuarioModalComponent>) {}

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }
}

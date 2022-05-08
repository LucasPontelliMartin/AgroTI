import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  searchModel: any = { Usuario: '', Senha: '' }
  mensagem = null;
  
  constructor(private _authentication : AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  acessar(){
    this.mensagem = null;

        if (this.searchModel.Usuario == '' || this.searchModel.Senha == '') {
            this.mensagem = 'InformeUsuarioSenha';
            return;
        }

    let user = this.searchModel.Usuario;
    let senha = this.searchModel.Senha;
    let dados: any;

    this._authentication.getLogin('Cliente/Login', user, senha).subscribe(r => {
      console.log(r);
      this.mensagem = r.message;
      console.log(this.mensagem);
      if(r.isSuccess){
        window.localStorage.setItem('token', r.data.Token);
        window.localStorage.setItem('cliente', r.data.Usuario);
        window.localStorage.setItem('Login', 'true');
        this.router.navigate(['/dashboard']);
      }
    })

  }

}

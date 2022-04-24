import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'http://localhost:3000/Cliente/Login';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getLogin(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(this.apiUrl, { Usuario: usuario, Senha: senha })
  }
}

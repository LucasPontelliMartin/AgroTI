import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'authorization': window.localStorage.getItem('token')
    })
  };

    params =  new HttpParams();

  constructor(private httpClient: HttpClient) { }

  public getLogin(url = null, usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(this.apiUrl + url, { Usuario: usuario, Senha: senha });
  }

  public get(url = null, usuario: string = null, senha: string = null): Observable<any> {
    return this.httpClient.get(this.apiUrl + url, this.httpOptions);
  }

  public post(url = null, model: any = {}): Observable<any> {
    return this.httpClient.post(this.apiUrl + url, model, this.httpOptions);
  }

  public delete(url = null, id = null): Observable<any> {
    this.params = this.params.set('id', id);
    return this.httpClient.delete(this.apiUrl + url, this.httpOptions  );
  }

}

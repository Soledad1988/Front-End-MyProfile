import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../modelos/nuevo-usuario';
import { LoginUsuario } from '../modelos/login-usuario';
import { JwtDto } from '../modelos/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authURL = 'https://backend-myprofile.herokuapp.com/auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login (loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

}

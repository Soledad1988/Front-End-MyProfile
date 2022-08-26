import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../modelos/exp-laboral';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {

  private url:string ="https://backend-myprofile.herokuapp.com/laboral";

  constructor(private http:HttpClient, tokenService:TokenService) { }

  getAll():Observable<ExpLaboral[]>{                                     
    return this.http.get<ExpLaboral[]>(this.url);    
  }

  //Crear Estudiante
 create(laboral:ExpLaboral):Observable<ExpLaboral>{
    return this.http.post<ExpLaboral>(this.url, laboral);
  }


  //Obtener una Exp Laboral
  get(id:number):Observable<ExpLaboral>{
    return this.http.get<ExpLaboral>(this.url+"/"+id);
  }

  //actualizar
  update(id:string, laboral:ExpLaboral){
    return this.http.put<ExpLaboral>(this.url, laboral);
  }

  //eliminar
  delete(id:string):Observable<ExpLaboral>{
    return this.http.delete<ExpLaboral>(this.url+"/"+id);
  }

}

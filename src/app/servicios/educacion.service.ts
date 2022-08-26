import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url:string ="https://backend-myprofile.herokuapp.com/educacion";

  constructor(private http:HttpClient) { }

  getAll():Observable<Educacion[]>{                                     
    return this.http.get<Educacion[]>(this.url);    
  }

  //Crear Estudiante
 create(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.url, educacion);
  }


  //Obtener una Exp Laboral
  get(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url+"/"+id);
  }


  //actualizar
  update(id:string, educacion:Educacion){
    return this.http.put<Educacion>(this.url, educacion);
  }

  //eliminar
  delete(id:string):Observable<Educacion>{
    return this.http.delete<Educacion>(this.url+"/"+id);
  }
}

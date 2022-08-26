import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Proyecto} from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url:string ="https://backend-myprofile.herokuapp.com/proyectos";

  constructor(private http:HttpClient) { }
  getAll():Observable<Proyecto[]>{                                     
    return this.http.get<Proyecto[]>(this.url);    
  }

  //Crear Estudiante
 create(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.url, proyecto);
  }


  //Obtener un proyecto
  get(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url+"/"+id);
  }


  //actualizar
  update(id:string, proyecto:Proyecto){
    return this.http.put<Proyecto>(this.url, proyecto);
  }

  //eliminar
  delete(id:string):Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.url+"/"+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  private url:string ="https://backend-myprofile.herokuapp.com/persona";

  constructor(private http:HttpClient) { }

  create(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }

  getAll():Observable<Persona[]>{                                     
    return this.http.get<Persona[]>(this.url);    
  }

  //Obtener una persona
  get(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url+"/"+id);
  }
  //actualizar
  update(id:string, persona:Persona){
    return this.http.put<Persona>(this.url, persona);
  }

}

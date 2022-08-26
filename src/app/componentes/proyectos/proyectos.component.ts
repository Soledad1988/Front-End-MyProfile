import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any = [];
  isLogged = false;
  constructor(private proyectosService:ProyectosService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getProyecto();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  getProyecto(){
    this.proyectosService.getAll().subscribe(
      pro=>this.proyectos=pro
    );
  }

  delete(id:string):void{
    console.log("eliminado");
    this.proyectosService.delete(id).subscribe(
      res=>{
        console.log(res);
        this.getProyecto();
      },
      err => console.log(err)
    );
  }

}

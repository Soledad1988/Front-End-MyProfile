import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css']
})
export class FormProyectosComponent implements OnInit {
  proyecto:Proyecto = new Proyecto;
  constructor(private proyectosService:ProyectosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProyecto();
  }

  getProyecto():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.proyectosService.get(id).subscribe(
            ed=>this.proyecto=ed
          );
        }
      }
    );
    }
  //metodo para implementar la logica del guardado
  create():void{
    console.log(this.proyecto);
    this.proyectosService.create(this.proyecto).subscribe(
      res=>this.router.navigate(['/porfolio'])
    );
  }

}

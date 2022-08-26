import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-educacion',
  templateUrl: './form-educacion.component.html',
  styleUrls: ['./form-educacion.component.css']
})
export class FormEducacionComponent implements OnInit {
  educacion:Educacion = new Educacion();
  constructor(private educacionService:EducacionService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  getEducacion():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.educacionService.get(id).subscribe(
            ed=>this.educacion=ed
          );
        }
      }
    );
  }

  //metodo para implementar la logica del guardado
  create():void{
    console.log(this.educacion);
    this.educacionService.create(this.educacion).subscribe(
      res=>this.router.navigate(['/porfolio'])
    );
  }

}

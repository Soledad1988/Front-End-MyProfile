import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/app/modelos/exp-laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';



@Component({
  selector: 'app-form-laboral',
  templateUrl: './form-laboral.component.html',
  styleUrls: ['./form-laboral.component.css']
})
export class FormLaboralComponent implements OnInit {

  laboral:ExpLaboral = new ExpLaboral();
  roles!: string[];
  isLogged = false;

  constructor(private laboralService:LaboralService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getLaboral();
  }

  getLaboral():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.laboralService.get(id).subscribe(
            es=>this.laboral=es
          );
        }
      }
    );
  }

  //metodo para implementar la logica del guardado
  create():void{
  console.log(this.laboral);
  this.laboralService.create(this.laboral).subscribe(
      res=>this.router.navigate(['/porfolio'])
    );
  }

}

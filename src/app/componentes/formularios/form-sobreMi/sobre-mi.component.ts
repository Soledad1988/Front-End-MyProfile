import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { SobreMiService } from 'src/app/servicios/sobre-mi.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  sobreMi:Persona = new Persona;

  public archivos: any = [];

  constructor(private sobreMiService:SobreMiService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.sobreMiService.get(id).subscribe(
            per=>this.sobreMi=per
          );
        }
      }
    );
    }
  //metodo para implementar la logica del guardado
  create():void{
    console.log(this.sobreMi);
    this.sobreMiService.create(this.sobreMi).subscribe(
      res=>this.router.navigate(['/porfolio'])
    );
  }

  capturarFile(event: any){
    //const imagenCapturada = event.target.file[0]
    //this.archivos.push(imagenCapturada)
    console.log(event.target.files)
  }

}

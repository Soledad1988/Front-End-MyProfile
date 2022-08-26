import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: any = [];

  constructor(private educacionService:EducacionService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getEducacion();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  getEducacion(){
    this.educacionService.getAll().subscribe(
      edu=>this.educaciones=edu
    );
  }

  delete(id:string):void{
    console.log("eliminado");
    this.educacionService.delete(id).subscribe(
      res=>{
        console.log(res);
        this.getEducacion();
      },
      err => console.log(err)
    );
  }


}

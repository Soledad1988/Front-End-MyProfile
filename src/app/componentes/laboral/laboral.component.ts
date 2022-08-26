import { Component, OnInit } from '@angular/core';
import { LaboralService } from 'src/app/servicios/laboral.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {

  expLaborales: any = [];

  constructor(private laboralService:LaboralService, private tokenService:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getLaboral();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  getLaboral(){
    this.laboralService.getAll().subscribe(
      lab=>this.expLaborales=lab
    );
  }

  delete(id:string):void{
    console.log("eliminado");
    this.laboralService.delete(id).subscribe(
      res=>{
        console.log(res);
        this.getLaboral();
      },
      err => console.log(err)
    );
  }

}

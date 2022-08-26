import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SobreMiService} from 'src/app/servicios/sobre-mi.service'
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  personas: any = [];
  isLogged = false;
  public archivos: any = [];

  constructor( private sobreMiService:SobreMiService,
    private tokenService:TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.getPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  //coloque al final
  login(){
    this.router.navigate(['/iniciar-sesion'])
  }

  getPersona(){
    this.sobreMiService.getAll().subscribe(
      per=>this.personas=per
    );
  }

  capturarFile(event: any){
    //const imagenCapturada = event.target.file[0]
    //this.archivos.push(imagenCapturada)
    console.log(event.target.files)
  }

}

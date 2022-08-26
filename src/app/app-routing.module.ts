import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormEducacionComponent } from './componentes/formularios/form-educacion/form-educacion.component';
import { FormLaboralComponent } from './componentes/formularios/form-laboral/form-laboral.component';
import { FormProyectosComponent } from './componentes/formularios/form-proyectos/form-proyectos.component';
import { SobreMiComponent} from './componentes/formularios/form-sobreMi/sobre-mi.component';
import { IniciarSesionComponent } from './componentes/formularios/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'porfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'sobreMi/:id', component:SobreMiComponent},//para editar
  {path:'formulario', component:FormLaboralComponent },
  {path:'formulario/:id', component:FormLaboralComponent},//para editar
  {path:'educacion', component:FormEducacionComponent },
  {path:'educacion/:id', component:FormEducacionComponent},
  {path:'proyectos', component:FormProyectosComponent},
  {path:'proyectos/:id', component:FormProyectosComponent},
  {path:'', redirectTo:'porfolio', pathMatch:'full',}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

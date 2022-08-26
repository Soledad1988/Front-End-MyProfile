import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEducacionComponent } from './componentes/formularios/form-educacion/form-educacion.component';
import { FormProyectosComponent } from './componentes/formularios/form-proyectos/form-proyectos.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LaboralComponent } from './componentes/laboral/laboral.component';
import { FormLaboralComponent } from './componentes/formularios/form-laboral/form-laboral.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/formularios/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SobreMiComponent } from './componentes/formularios/form-sobreMi/sobre-mi.component';
import { interceptorProvider, InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    LaboralComponent,
    FormLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    FormEducacionComponent,
    FormProyectosComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

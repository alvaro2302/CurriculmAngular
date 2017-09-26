import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { InicioComponent } from './inicio/inicio.component';
import { MetasComponent } from './components/metas/metas.component';
import { LogrosComponent } from './components/logros/logros.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    HabilidadesComponent,
    InicioComponent,
    MetasComponent,
    LogrosComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

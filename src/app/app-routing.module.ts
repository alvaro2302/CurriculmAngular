import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { MetasComponent } from "./components/metas/metas.component";
import { LogrosComponent } from "./components/logros/logros.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";



const routes: Routes = [
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'metas', component: MetasComponent },
  { path: 'logros', component: LogrosComponent },
  { path: 'proyectos', component: ProyectosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

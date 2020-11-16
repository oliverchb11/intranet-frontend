import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdministracionComponent } from './pages/equipo/administracion/administracion.component';
import { FacultadIngenieriaComponent } from './pages/equipo/facultad-ingenieria/facultad-ingenieria.component';
import { FacultadDerechoComponent } from './pages/equipo/facultad-derecho/facultad-derecho.component';
import { FacultadCienciasEmpresarialesComponent } from './pages/equipo/facultad-ciencias-empresariales/facultad-ciencias-empresariales.component';
import { VacantesComponent } from './pages/empleo/vacantes/vacantes.component';
import { HojasDeVidaComponent } from './pages/empleo/hojas-de-vida/hojas-de-vida.component';
import { ArchivosComponent } from './pages/archivos/archivos/archivos.component';

const routes: Routes = [
  {
    path:'inicio', component : InicioComponent
  },
  {
    path:'administracion', component : AdministracionComponent
  },
  {
    path:'facultad-ingenieria', component : FacultadIngenieriaComponent
  },
  {
    path:'facultad-derecho', component : FacultadDerechoComponent
  },
  {
    path:'facultad-ciencias-empresariales', component : FacultadCienciasEmpresarialesComponent
  },
  {
    path:'vacantes', component : VacantesComponent
  },
  {
    path:'hojas-de-vida', component : HojasDeVidaComponent
  },
  {
    path:'archivos', component : ArchivosComponent
  },
  {
    path:'**' , pathMatch : 'full' , component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

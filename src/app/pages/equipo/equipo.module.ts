
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion/administracion.component';
import { FacultadIngenieriaComponent } from './facultad-ingenieria/facultad-ingenieria.component';
import { FacultadCienciasEmpresarialesComponent } from './facultad-ciencias-empresariales/facultad-ciencias-empresariales.component';
import { FacultadDerechoComponent } from './facultad-derecho/facultad-derecho.component';
import { ComponentsModule } from './../../components/components.module';


@NgModule({
  declarations: [AdministracionComponent, FacultadIngenieriaComponent, FacultadCienciasEmpresarialesComponent, FacultadDerechoComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    AdministracionComponent,
    FacultadIngenieriaComponent,
    FacultadCienciasEmpresarialesComponent,
    FacultadDerechoComponent
  ]
})
export class EquipoModule { }

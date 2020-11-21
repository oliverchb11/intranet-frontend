
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion/administracion.component';
import { FacultadIngenieriaComponent } from './facultad-ingenieria/facultad-ingenieria.component';
import { FacultadCienciasEmpresarialesComponent } from './facultad-ciencias-empresariales/facultad-ciencias-empresariales.component';
import { FacultadDerechoComponent } from './facultad-derecho/facultad-derecho.component';
import { ComponentsModule } from './../../components/components.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NoImgPipe } from 'src/app/pipes/no-img.pipe';


@NgModule({
  declarations: [
    AdministracionComponent,
    FacultadIngenieriaComponent,
    FacultadCienciasEmpresarialesComponent, 
    FacultadDerechoComponent,
    NoImgPipe,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports: [
    AdministracionComponent,
    FacultadIngenieriaComponent,
    FacultadCienciasEmpresarialesComponent,
    FacultadDerechoComponent,
    NoImgPipe
  ]
})
export class EquipoModule { }

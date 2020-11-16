import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacantesComponent } from './vacantes/vacantes.component';
import { HojasDeVidaComponent } from './hojas-de-vida/hojas-de-vida.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [VacantesComponent, HojasDeVidaComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports:[
    VacantesComponent,
    HojasDeVidaComponent
  ]
})
export class EmpleoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacantesComponent } from './vacantes/vacantes.component';
import { HojasDeVidaComponent } from './hojas-de-vida/hojas-de-vida.component';



@NgModule({
  declarations: [VacantesComponent, HojasDeVidaComponent],
  imports: [
    CommonModule
  ]
})
export class EmpleoModule { }

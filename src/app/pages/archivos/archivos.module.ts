import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivosComponent } from './archivos/archivos.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ArchivosComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[ArchivosComponent]
})
export class ArchivosModule { }

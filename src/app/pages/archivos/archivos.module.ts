import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivosComponent } from './archivos/archivos.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ArchivosComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbModalModule
  ],
  exports:[ArchivosComponent]
})
export class ArchivosModule { }

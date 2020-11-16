import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { NgbDatepickerModule , NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";  

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbDatepickerModule,
    FormsModule,
    NgbProgressbarModule
  ],
  exports:[
    InicioComponent
  ]
})
export class InicioModule { }

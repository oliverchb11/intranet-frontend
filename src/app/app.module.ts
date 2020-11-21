
//modulos de la aplicación
import { EquipoModule } from './pages/equipo/equipo.module';
import { InicioModule } from './pages/inicio/inicio.module';
import {EmpleoModule  } from "./pages/empleo/empleo.module";
import {ArchivosModule  } from "./pages/archivos/archivos.module";
//httpClientModulo
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule,
    EquipoModule,
    HttpClientModule,
    ComponentsModule,
    EmpleoModule,
    ArchivosModule,
    NgbModule,
    NgbModalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmpleoModule } from '../pages/empleo/empleo.module';
import { ImagenComponent } from './imagen/imagen.component';




@NgModule({
  declarations: [SidebarComponent, NavbarComponent, Sidebar2Component, FooterComponent, ImagenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    SidebarComponent,
    Sidebar2Component,
    NavbarComponent,
    FooterComponent,
    ImagenComponent
  ]
})
export class ComponentsModule { }

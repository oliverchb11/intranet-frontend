import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [SidebarComponent, NavbarComponent, Sidebar2Component, FooterComponent],
  imports: [
    CommonModule,
  
  ],
  exports:[
    SidebarComponent,
    Sidebar2Component,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
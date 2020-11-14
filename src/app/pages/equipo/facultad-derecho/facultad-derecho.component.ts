import { Component, OnInit } from '@angular/core';
import { FacultadDerechoService } from '../../../services/facultad-derecho.service';
import { Personas } from '../../../interface/personas';

@Component({
  selector: 'app-facultad-derecho',
  templateUrl: './facultad-derecho.component.html',
  styleUrls: ['./facultad-derecho.component.css']
})
export class FacultadDerechoComponent implements OnInit {
  public facultad_derechos:Personas[]
  constructor(private facultadDereho:FacultadDerechoService) { }

  ngOnInit(): void {
    this.getFacultarDerechoCom()
  }


  getFacultarDerechoCom (){
    this.facultadDereho.getFacultatDerecho$().subscribe((derecho:any)=>{
      this.facultad_derechos = derecho.result;
      console.log(this.facultad_derechos);
    })
  }

}

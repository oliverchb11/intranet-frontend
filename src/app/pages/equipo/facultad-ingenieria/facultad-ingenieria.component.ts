import { Component, OnInit } from '@angular/core';
import { FacultadIngenieriaService } from '../../../services/facultad-ingenieria.service';
import { Personas } from '../../../interface/personas';

@Component({
  selector: 'app-facultad-ingenieria',
  templateUrl: './facultad-ingenieria.component.html',
  styleUrls: ['./facultad-ingenieria.component.css']
})
export class FacultadIngenieriaComponent implements OnInit {
  public facultar_ing:Personas[]
  constructor(private facultad_ingenieria: FacultadIngenieriaService) { }

  ngOnInit(): void {
    this.getFacultarIngenieriaCom()
  }

  getFacultarIngenieriaCom (){
    this.facultad_ingenieria.getFacultatIngenieria$().subscribe((ing:any)=>{
      this.facultar_ing = ing.result;
      console.log(this.facultar_ing);
    })
  }

}

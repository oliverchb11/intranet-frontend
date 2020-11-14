import { Component, OnInit } from '@angular/core';
import { FacultadCienciasEmpresarialesService } from '../../../services/facultad-ciencias-empresariales.service';
import { Personas } from '../../../interface/personas';

@Component({
  selector: 'app-facultad-ciencias-empresariales',
  templateUrl: './facultad-ciencias-empresariales.component.html',
  styleUrls: ['./facultad-ciencias-empresariales.component.css']
})
export class FacultadCienciasEmpresarialesComponent implements OnInit {
  public facultadCienciasEmp : Personas[]
  constructor(private facultadCienciasEmpresariales:FacultadCienciasEmpresarialesService) { }

  ngOnInit(): void {
    this.getFacultarCienciasEmpresarialesCom()
  }

  
  getFacultarCienciasEmpresarialesCom (){
    this.facultadCienciasEmpresariales.getFacultatCienciasEmpresariales$().subscribe((cienciasemp:any)=>{
      this.facultadCienciasEmp = cienciasemp.result;
      console.log(this.facultadCienciasEmp);
    })
  }

}

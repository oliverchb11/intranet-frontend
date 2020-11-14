import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../../services/personas.service';
import { Personas } from '../../../interface/personas';
import { AdministracionService } from '../../../services/administracion.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  public administracion: Personas[];
  public pathImg:string = "1418637"
  constructor(private administracionService: AdministracionService) { }

  ngOnInit(): void {
    this.getAdministracionComp()
  }

  public getAdministracionComp (){
    this.administracionService.getAdministracion$().subscribe((admin:any)=>{
      this.administracion = admin.result
      console.log( this.administracion );


    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}

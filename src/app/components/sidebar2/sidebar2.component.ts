import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {
  public fechaActual: Date = new Date();
  public personasCumpleanos:any[] = []
  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.getPersonasComp()
  }

  public getPersonasComp (){
    let fechaHoy:string;
    let fechaCumple:Date;
    let fechaCumpleCortada:string;
    let mesActual:number;
    let mesCumpleanos:number
    this.personasService.getPersonas$().subscribe((personass:any)=>{
      for(let i = 0 ; i<personass.result.length; i++){
        fechaHoy = this.fechaActual.toISOString().split('T')[0]
        fechaCumple = new Date(personass.result[i].Fecha_Nacimiento)
        fechaCumpleCortada = fechaCumple.toISOString().split('T')[0]
        mesActual = new Date(fechaHoy).getMonth()+1;
        mesCumpleanos = new Date(fechaCumpleCortada).getMonth()+1;
        if(mesActual === mesCumpleanos){
          this.personasCumpleanos.push(personass.result[i])
          console.log(  this.personasCumpleanos);
        }
 
 }

    })
  }

}

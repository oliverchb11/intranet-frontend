import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openCad(content){
    this.modalService.open(content)
  }
  openTalento(content){
    this.modalService.open(content)
  }

  openCdt(content){
    this.modalService.open(content)
  }

  openMercadeo(content){
    this.modalService.open(content)
  }

  openRecreacion(content){
    this.modalService.open(content)
  }

  openPlaneacion(content){
    this.modalService.open(content)
  }

  openOtros(content){
    this.modalService.open(content)
  }

}

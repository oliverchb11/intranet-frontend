import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Personas } from '../interface/personas';
const API = environment.API_FACULTAD_CIENCIAS_EMPRESARIALES;
@Injectable({
  providedIn: 'root'
})
export class FacultadCienciasEmpresarialesService {

  constructor(private http : HttpClient) { }

  
  public getFacultatCienciasEmpresariales$(){
    return this.http.get<Personas[]>(`${API}`);
  }
}

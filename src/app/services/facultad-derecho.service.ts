import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personas } from '../interface/personas';
const API = environment.API_FACULTAD_DERECHO;
@Injectable({
  providedIn: 'root'
})
export class FacultadDerechoService {

  constructor(private http : HttpClient) { }

  public getFacultatDerecho$(){
    return this.http.get<Personas[]>(`${API}`);
  }
}

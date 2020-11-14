import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personas } from '../interface/personas';
const API = environment.API_FACULTAD_INGENIERIA;
@Injectable({
  providedIn: 'root'
})
export class FacultadIngenieriaService {

  constructor(private http : HttpClient) { }

  public getFacultatIngenieria$(){
    return this.http.get<Personas[]>(`${API}`);
  }
}

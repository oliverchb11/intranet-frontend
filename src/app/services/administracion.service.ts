import { Personas } from './../interface/personas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const API = environment.API_ADMINISTRACION;
@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http : HttpClient) { }


  public getAdministracion$(){
    return this.http.get<Personas[]>(`${API}`);
  }
}

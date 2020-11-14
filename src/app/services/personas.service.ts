import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personas } from '../interface/personas';
const API = environment.API_PERSONAS;
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http : HttpClient) { }

  public getPersonas$(){
    return this.http.get<Personas[]>(`${API}/personas`);
  }
}

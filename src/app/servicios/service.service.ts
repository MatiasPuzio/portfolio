import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    url:string="localhost:8080"
  constructor(private http:HttpClient) { 

  }

obtenerDatosPersona():Observable<any>{
  return this.http.get(this.url+"/persona");
}




obtenerDatosEducacion():Observable<any>{
  return this.http.get(this.url+"/educacion");
}


}

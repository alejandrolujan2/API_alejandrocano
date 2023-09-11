import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://api-node-prueba-production.up.railway.app/api/products';
  agregarInformacion: any;

  constructor(private http: HttpClient) { }

  public getData (): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}

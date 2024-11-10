import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from '../models/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private apiUrl='http://localhost:8080/api/tipos';
  constructor(private http:HttpClient) { }

  getTipos():Observable<Tipo[]>{
    return this.http.get<Tipo[]>(this.apiUrl);
  }
  
}

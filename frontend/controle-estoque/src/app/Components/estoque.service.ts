import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estoque } from '../Models/Estoque';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {


  private urlApi = 'https://localhost:44322/api/Estoque';  // URL to web api

constructor(
    private http: HttpClient
    ) { }

  SelecionarTodoEstoque(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(this.urlApi+'/BuscarTodoEstoque');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class EditarContatoService {

  

  constructor(private http: HttpClient) { }

  editar(dados: {logradouro: string, telefone:string, id: number}){

    return this.http.post(`${environment.api_url}/editarcontato/${dados.id}`, dados);

  }

}

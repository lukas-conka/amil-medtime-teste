
import { Agendamento } from './../auth/interfaces/agendamento.model';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AgendamentoService {
  
  constructor(private http:HttpClient) { 
    
  }

  agendar(agendamento: {estado:string, especialidade: string, unidade: string, data: string, horario: string, idcliente:number}){
 
    return this.http.post(`${environment.api_url}/agendamentos`,agendamento);
    
  }

}

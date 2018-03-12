import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class HistoricoService {



  constructor(private http: HttpClient) { 

    
  }

  buscarHistorico(id:number){

    return this.http.get(`${environment.api_url}/historico/${id}`)
    .map(response =>{
      console.log(response);
    })

  }

}

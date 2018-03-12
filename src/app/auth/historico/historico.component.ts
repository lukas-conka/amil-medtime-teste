import { AuthService } from './../../services/auth.service';
import { User } from './../interfaces/user.model';
import { Agendamento } from './../interfaces/agendamento.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  agendamento: Agendamento
  idcliente: number;
  user: User;

  constructor(private http: HttpClient, public auth: AuthService) { }

  ngOnInit() {

    this.idcliente = JSON.parse(atob(localStorage.getItem('user'))).id;

    this.http.get<any>(`${environment.api_url}/historico/${this.idcliente}`).subscribe(data => {
          console.log(data);
          this.agendamento = data;

      });

      this.http.get<any>(`${environment.api_url}/meuscontatos/${this.idcliente}`).subscribe(data => {
        console.log(data);
        this.user = data;
      })

    }
}

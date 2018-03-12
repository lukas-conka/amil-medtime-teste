import { EditarContatoService } from './../../services/editar-contato.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './../interfaces/user.model';
import { Agendamento } from './../interfaces/agendamento.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css']
})
export class EditarContatoComponent implements OnInit {

  
  idcliente: number;
  nome: string;
  user: User;
  f: FormGroup;
  sucessoCadastro = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private editService: EditarContatoService) { }

  ngOnInit() {

    this.idcliente = JSON.parse(atob(localStorage.getItem('user'))).id;

    this.f = this.formBuilder.group({

      logradouro:['',[Validators.compose([Validators.minLength(5)])]],
      telefone:['', [Validators.minLength(8)]],
      id:[this.idcliente]

    });

   

    this.idcliente = JSON.parse(atob(localStorage.getItem('user'))).id;
    this.nome = JSON.parse(atob(localStorage.getItem('user'))).name;


      this.http.get<any>(`${environment.api_url}/meuscontatos/${this.idcliente}`).subscribe(data => {
        console.log(data);
        this.user = data;

        this.f = this.formBuilder.group({

      logradouro:[this.user.logradouro,[Validators.compose([Validators.minLength(5)])]],
      telefone:[this.user.telefone, [Validators.minLength(8)]],
      id:[this.idcliente]

    });
      })

    }

    onSubmit(){
      
      this.editService.editar(this.f.value).subscribe(
        (resp) =>{
            console.log(resp);
            this.sucessoCadastro = true;
        },
        (errorResponse: HttpErrorResponse) => {
            if(errorResponse.status == 401){
              this.sucessoCadastro = false;
            }
        }
      );
    }

}

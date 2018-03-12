import { HttpErrorResponse } from '@angular/common/http';
import { AgendamentoService } from './../../services/agendamento.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  sucessoCadastro = false;
  formAgendar: FormGroup;
  idcliente: number;


  constructor(private agenService: AgendamentoService, private formBuilder: FormBuilder) { }

  ngOnInit() {


    //descriptografo, transformo em objeto json novamente, e pego o id no localstorage.
    this.idcliente = JSON.parse(atob(localStorage.getItem('user'))).id;

    this.formAgendar = this.formBuilder.group({
      estado:[null, [Validators.required]],
      especialidade: [null, [Validators.required]],
      unidade: [null, [Validators.required]],
      data: [null, [Validators.required]],
      horario: [null, [Validators.required]],
      idcliente: [this.idcliente]
    });
  }

  onSubmit(){
    this.agenService.agendar(this.formAgendar.value).subscribe(
      (resp) =>{ 
        this.sucessoCadastro = true;
        //tentar zerar form  - fazer
        console.log(resp);
      },
      (errorResponse: HttpErrorResponse) => { 
        
        if(errorResponse.status === 401){
          this.sucessoCadastro = false;
        } 
        
      }
    );
  }

}

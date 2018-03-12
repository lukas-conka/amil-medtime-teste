import { EditarContatoService } from './../services/editar-contato.service';

import { AgendamentoService } from './../services/agendamento.service';
import { DashboardRoutingModule } from './dashboard/dashboard.routing.module';
import { AuthService } from './../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AgendarComponent } from './agendar/agendar.component';
import { HistoricoComponent } from './historico/historico.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  declarations: [
    LoginComponent, 
    DashboardComponent, 
    ProfileComponent, AgendamentoComponent, MenuComponent, FooterComponent, AgendarComponent, HistoricoComponent, EditarContatoComponent
    ],
    providers:[
      AuthService,
      AgendamentoService,
      EditarContatoService
    ]
})
export class AuthModule { }

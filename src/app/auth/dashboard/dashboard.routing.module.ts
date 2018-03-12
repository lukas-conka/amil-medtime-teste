import { EditarContatoComponent } from './../editar-contato/editar-contato.component';
import { HistoricoComponent } from './../historico/historico.component';
import { AgendarComponent } from './../agendar/agendar.component';
import { AgendamentoComponent } from './../agendamento/agendamento.component';
import { ProfileComponent } from './../profile/profile.component';
import { AuthGuard } from './../../guards/auth.service.guard';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';





@NgModule({
    imports: [
        RouterModule.forChild([
          
            { 
                path: 'auth/dashboard', component: DashboardComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]
                //children: [
                    /*{
                        path: 'teste1',
                        component: TesteComponent
                    },
                    {
                        path: 'teste2',
                        component: Teste2Component
                    }*/
                //]
            },
            {
                path: 'auth/profile', component: ProfileComponent, canActivate: [AuthGuard],
                
            },
            {
                path: 'auth/agendamento', component: AgendamentoComponent, canActivate: [AuthGuard]
            },
            {
                path: 'auth/agendar', component: AgendarComponent, canActivate: [AuthGuard]
            },
             {
                path: 'auth/historico', component: HistoricoComponent, canActivate: [AuthGuard]
            },
            {
                path: 'auth/editar', component: EditarContatoComponent, canActivate: [AuthGuard]
            }
        ])
    ],
    declarations:[],
    exports: [RouterModule]
})
export class DashboardRoutingModule{}

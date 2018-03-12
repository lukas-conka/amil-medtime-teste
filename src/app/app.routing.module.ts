import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent},
            { path: 'auth/login', component: LoginComponent},
            
        ])
    ],
    declarations:[],
    exports: [RouterModule]
})
export class AppRoutingModule{}

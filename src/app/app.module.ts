
import { AplicationErrorHandle } from './app.error-handle';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './guards/auth.service.guard';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
   
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AplicationErrorHandle},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

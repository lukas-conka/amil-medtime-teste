import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 

  constructor(public auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    
  }

  logout(e){
      e.preventDefault();
      this.auth.logout();
  }

  



}

import { environment } from './../../../environments/environment';
import { User } from './../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private auth:AuthService, private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any>(`${environment.api_url}/auth/me`).subscribe(data => {
      console.log(data);
      this.user = data.user;
    })
  }

}

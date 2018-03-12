import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;
  errorCredencials = false;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit(){
    this.authService.login(this.f.value).subscribe(
      (resp) =>{ 
        this.router.navigate(['auth/dashboard']);
      },
      (errorResponse: HttpErrorResponse) => { 
        
        if(errorResponse.status === 401){
          this.errorCredencials = true;
        } 
        
      }
    );
  }

}

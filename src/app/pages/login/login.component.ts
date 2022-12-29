import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ILogin } from 'src/app/data/ILogin';
import { LoginService } from 'src/app/services/loginService';




@Component({ selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public loginCredentials:ILogin ={
        email:"",
        password:""
    };

    constructor(private loginService:LoginService) {}
    

    public onSubmit(loginForm:NgForm):void
    {
        if(loginForm.invalid) return;

        this.loginService.postLoginCredentials(this.loginCredentials).subscribe();
    }
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ILogin } from 'src/app/data/ILogin';
import { ApiHttpService } from 'src/app/services/apiHttpService';
import { ApiPaths } from 'src/app/data/apiPaths';
import { Constants } from 'src/app/data/Constants';




@Component({ selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public loginCredentials:ILogin ={
        email:"",
        password:""
    };
    
    token:any

    constructor(private apiHttpService:ApiHttpService,
                private router:Router) {}
    

    public onSubmit(loginForm:NgForm):void
    {
        if(loginForm.invalid) return;
        
        const url = this.apiHttpService.baseUrl + ApiPaths.Login;
        this.apiHttpService.post(url, this.loginCredentials,).subscribe(
            success => 
            {
                const decoder = new TextDecoder();
                const responseText = decoder.decode(success);
                this.token = responseText;
                Constants.JWT = responseText;
                console.log(this.token);
                this.router.navigateByUrl("Home");
            }
        );
        
    }
}
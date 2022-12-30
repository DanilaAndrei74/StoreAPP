import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ILogin } from "../data/ILogin";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private http:HttpClient) {}
    LoginUrl = 'https://localhost:7113/Login'

    postLoginCredentials(userCredentials: ILogin) : Observable<any>
    {
        return this.http.post(this.LoginUrl, userCredentials);
    }
}
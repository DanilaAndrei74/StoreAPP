import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "../data/Constants";


@Injectable({
    providedIn: 'root'
})
export class ApiHttpService{
    baseUrl = 'https://localhost:7113/'
     
    options = {
        responseType: 'arraybuffer',
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + Constants.JWT
          })
        };

    constructor (private http: HttpClient) { }

    public get(url: string, options?: any) {
        if(options == null) options = this.options;
        return this.http.get(url, options);
    }
    public post(url: string, data: any, options?: any) {
        if(options == null) options = this.options;
        return this.http.post(url, data, options);
    }
    public put(url: string, data: any, options?: any) {
        if(options == null) options = this.options;
        return this.http.put(url, data, options);
    }
    public delete(url: string, options?: any) {
        if(options == null) options = this.options;
        return this.http.delete(url, options);
    }
    
}
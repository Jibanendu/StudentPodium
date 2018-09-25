import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private router:Router) { }

    login(emailAddress: string, password: string) {
    console.log(password);
        return this.http.post<any>(`${environment.apiUrl}/login`, { emailAddress: emailAddress, password: password })
            .pipe(map(data => {
                console.log('Hello->'+data.response);
                if(data.response == 'Success')
                {
                    alert("You have logged in successfully.");
                    console.log("You have logged in successfully.");
                     return data;
                }
                else if(data.response == 'Password Failed')
                {
                    console.log("You have entered a wrong Password.");
                    return 1;
                }
                else if(data.response == 'Email Failed')
                {
                    console.log("The email which you have entered is not registed.");
                    return 2;
                }
               
            }));
    }
}
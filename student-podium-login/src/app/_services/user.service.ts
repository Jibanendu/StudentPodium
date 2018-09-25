import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/login`);
    }

    //getById(id: number) {
      //  return this.http.get(`${environment.apiUrl}/login/` + id);
    //}

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/create/`, user);
    }

   // update(user: User) {
     //   return this.http.put(`${environment.apiUrl}/create/` + user.id, user);
    //}

    //delete(id: number) {
      //  return this.http.delete(`${environment.apiUrl}/create/` + id);
    //}
}
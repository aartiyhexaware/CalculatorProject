import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { User } from './commonObject';
@Injectable({
  providedIn: 'root'
})
export class commonService {

  constructor(private http: HttpClient) { }

  
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
}

register(user: User) {
  return this.http.post(`${environment.apiUrl}/users/register`, user);
}

}
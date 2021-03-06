import { Injectable } from '@angular/core';

import { User } from './user';
import { users } from './users';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static user: User;
  constructor(private http: HttpClient) { }
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private url = 'http://localhost:8000/api/'

  static getUser(phone: string, password: string): void {
    const ttt = users.find(u => u.phoneNumber === phone && u.password === password
    || u.email === phone && u.password === password);
    UserService.user = ttt;
  }

  static checkNewUser(phone: string, email: string): boolean {
    const ttt = users.find(u => u.phoneNumber === phone || u.email === email);
    return ttt != null;
  }

  static newUser(phone: string, email: string, pass: string) {
    const ttt: User = {
      id: users.length,
      username: null,
      phoneNumber: phone,
      email: email,
      password: pass
    };
    users.push(ttt);
  }
  static editUser(id: number, username: string,phone: string, email: string, pass: string) {
    const ttt = users.find(u => u.id === id);
    ttt.email = email;
    ttt.phoneNumber = phone;
    ttt.username = username;
    ttt.password = pass;
  }

  Login(loginInfo): Observable<any> {
    return this.http.post<any>(this.url+'user/login/', {...loginInfo}, this.httpHeaders)
  }
}

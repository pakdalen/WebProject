import { Injectable } from '@angular/core';

import { User } from './user';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static user: User;
  constructor() { }

  static getUser(phone: string, password: string): void {
    const ttt = users.find(u => u.phoneNumber === phone && u.password === password);
    UserService.user = ttt;
  }
}

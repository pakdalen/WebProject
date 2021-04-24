import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  username: string;
  phone: string;
  email: string;
  pass: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.user = UserService.user;
    this.username = this.user.username;
    this.phone = this.user.phoneNumber;
    this.email = this.user.email;
    this.pass = this.user.password;
  }
  save(): void {
    if (this.phone === '' || this.email === '' || this.pass === '') {
      alert('Заполните все поля!');
      return;
    }
    // if (UserService.checkNewUser(this.phone, this.email)) {
    //   alert('пользователь с таким номером телефона или почтой уже существует');
    //   return;
    // }
    UserService.editUser(UserService.user.id, this.username, this.phone, this.email, this.pass);
    this.router.navigate(['/categories']);
  }
}

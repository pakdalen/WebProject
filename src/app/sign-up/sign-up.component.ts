import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  phone: string = '';
  email: string = '';
  pass: string = '';
  pass2: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newUser(): void {
    // const phone = (document.getElementById('phone') as HTMLInputElement).value;
    // const email = (document.getElementById('email') as HTMLInputElement).value;
    // const pass = (document.getElementById('pass') as HTMLInputElement).value;
    // const pass2 = (document.getElementById('pass2') as HTMLInputElement).value;
    if (this.phone === '' || this.email === '' || this.pass === '' || this.pass2 === '') {
      alert('Заполните все поля!');
      return;
    }
    if (this.pass !== this.pass2) {
      alert('Пароли не сходятся');
      return;
    }
    if (UserService.checkNewUser(this.phone, this.email)) {
      alert('пользователь с таким номером телефона или почтой уже существует');
      return;
    }
    UserService.newUser(this.phone, this.email, this.pass);
    this.router.navigate(['/sign-in']);
  }
}

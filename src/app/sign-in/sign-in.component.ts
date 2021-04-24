import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getUser(): void {
    const login = (document.getElementById('login') as HTMLInputElement).value;
    const pass = (document.getElementById('pass') as HTMLInputElement).value;

    if (login === '' || pass === ''){
      alert('Заполните поля!');
      return;
    }
    UserService.getUser(login, pass);
    if (UserService.user == null) {
      alert('Нет такого пользователя');
      return;
    }
    this.router.navigate(['/categories']);
  }
}

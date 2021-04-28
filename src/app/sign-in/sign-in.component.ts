import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  login: string;
  pass: string;
  constructor(
    private router: Router,
    private userService: UserService  
  ) { }

  ngOnInit(): void {
  }
  getUser(): void {
    this.userService.Login({ 
      username: this.login, 
      password: this.pass 
    }).subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token)

        this.router.navigate(['/categories']);
      } 

      else alert('Пароль неправильный!')
    })
  }
}

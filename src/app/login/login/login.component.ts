import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { AuthService } from '../../service/common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public password: string = "password";
  public showPassword: boolean = false;

  constructor(
    private readonly _route: Router,
    private readonly _loginService: LoginService,
    private readonly _authGaurd: AuthService) {
    this.showPassword = false;
  }

  ngOnInit(): void {
    if (this.IsAuthenticated) {
      this._route.navigate(['/user'])
    }
  }

  get IsAuthenticated() {
    return this._authGaurd.IsAuthenticate();
  }
  get LoginForm() {
    return this._loginService.Form;
  }

  get UserName() {
    return this.LoginForm.get('userName');
  }

  get Password() {
    return this.LoginForm.get('passwords');
  }

  public togglePasswordVisibility(): void {
    if (this.showPassword == true) {
      this.password = 'text';
      this.showPassword = false;
    } else {
      this.password = 'password';
      this.showPassword = true;
    }
  }

  public submit() {
    this.LoginForm.markAllAsTouched();
    if (this.LoginForm.invalid) {
      return;
    }
    this._loginService.login().subscribe(result => {
      localStorage.setItem('token', result.data);
      this._route.navigate(['/user']);
    });
  }

}



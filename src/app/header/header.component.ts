import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { AuthService } from '../service/common/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sideNav: any;
  constructor(
    private readonly _activateRouter: ActivatedRoute,
    private readonly _route: Router,
    private readonly _loginService: LoginService,
    private readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get IsAuthenticate(){
     return this._authService.IsAuthenticate();
  }
  
  get UserName(){
    return this._authService.LoggedInUserName();
  }

  public logOut() {
    this._loginService.logout();
    this._route.navigate(['/login']);
  }
}

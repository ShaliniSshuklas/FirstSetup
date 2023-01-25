import { Injectable } from '@angular/core';
import { JwtPayModel } from 'src/app/models/jwt/jwt-pay.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  ngOnInit(): void {

  }

  public IsAuthenticate(): boolean {
    let token = this.getJwtToken();
    if (Number(token?.UserId) > 0) {
         return true;
    }
    return false;
  }

  public LoggedInUserName() {
    let token = this.getJwtToken();
    if (token && token.UserName) {
      return token.UserName;
    }
    return "";
  }

  private getJwtToken(): JwtPayModel | null {
    let token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    try {
      let payloadString = atob(token.split('.')[1]);

      if (payloadString == "") {
        return null;
      }

      let payload = JSON.parse(payloadString) as JwtPayModel;

      return payload;
    } catch {
      localStorage.removeItem('token');
      return null;
    }
  }

}

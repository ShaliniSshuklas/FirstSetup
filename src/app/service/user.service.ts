import { HttpClient } from "@angular/common/http";
import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { Injectable } from "@angular/core";
import { UserModel } from '../models/user.model';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSetting } from "src/config/app-setting";

@Injectable()
export class UserService {
    public userList: UserModel[];

    public constructor(private http: HttpClient) {
        this.userList = [];
    }


    public getAllUser(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(AppSetting.user.getAll);
    }

}
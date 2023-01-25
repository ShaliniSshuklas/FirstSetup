import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequestModel } from '../../models/login/login-request.model';
import { AppSetting } from '../../../config/app-setting';
import { ApiResponseModel } from '../../models/common/api-response.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginService implements OnInit {
   // public isAuthenticate: boolean = false;
    
    private form: FormGroup;
    private model: LoginRequestModel = new LoginRequestModel();

    constructor(
        private _fb: FormBuilder,
        private readonly _route: Router,
        private readonly _http: HttpClient,
    ) {
       this.form = this.initializeForm();
    }

    get Form() {
        return this.form;
    }

    ngOnInit(): void {
        // if(localStorage.getItem('token') == null){
        //     this._route.navigate(['/login']);
        // }
    }


    public initializeForm():FormGroup {
        return this._fb.group({
            userName: [this.model.userName, Validators.required],
            passwords: [this.model.passwords, Validators.required],
        })
    }

    public login(){
        //this.isAuthenticate = true;
        this.model = this.Form.value;
        return this._http.post<ApiResponseModel<any>>(AppSetting.login.login, this.model);

    }

    public logout() {
       // this.isAuthenticate = false;
       localStorage.removeItem('token');
    }
}



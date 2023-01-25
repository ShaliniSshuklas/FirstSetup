import { environment } from '../environments/environment';



export class AppSetting {
    public static apiBaseUrl = environment.apiBaseUrl;

    public static user = {
        getAll: AppSetting.apiBaseUrl + "/api/user/get",
    }
    
    public static login = {
        login: AppSetting.apiBaseUrl + "/api/auth/login",
    }
}
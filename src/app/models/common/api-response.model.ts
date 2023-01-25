export class ApiResponseModel<T>{
    constructor() {
       // this.data = "";
        this.isSuccess = false;
        this.message = "";
        this.status = 0;
    }
    public data: T | undefined;
    public isSuccess: boolean;
    public message: string;
    public status: number;
}
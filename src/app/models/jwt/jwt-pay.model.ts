export class JwtPayModel{
    constructor(){
        this.UserId = 0;
        this.UserName = "";
        this.Email = ""
        this.MobileNumber = "";
    }
    public UserId: number ;
    public UserName: string;
    public Email: string;
    public MobileNumber: string;
}
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  
  public model: UserModel[]=[];
  public datasource: UserModel[] = [];
  public displayedColumns: string[];

  constructor(private readonly _userSerive: UserService) {
    this.displayedColumns = this.getDisplayColumns();
   }

  ngOnInit(): void {
    this._userSerive.getAllUser().subscribe(data => {
      this.datasource = data ?? [];     
    });
  }

  public editRecord(){
    
  }
  
  private getDisplayColumns() {
    return[
      "Username"
      ,"Email"
      ,"MobileNum"
      ,"Action"
    ]
  }
}

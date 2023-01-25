import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 public inputText = "According To Prateek Sir , how dare u to initialize a form here";
 public outputText = ""
  constructor() { }

  ngOnInit(): void {
  }

  public getData(value: any){
    this.outputText = value;
  }

}

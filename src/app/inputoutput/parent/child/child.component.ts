import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  
  @Input() inputFunction: string ="";
  @Output() outputFunction: EventEmitter<string>  =  new EventEmitter();
  outputString = "Hey i'm your child";

  constructor() { }

  ngOnInit(): void {
    console.warn(this.inputFunction);
  }

  public sendData(){
    this.outputFunction.emit(this.outputString);
  }
}

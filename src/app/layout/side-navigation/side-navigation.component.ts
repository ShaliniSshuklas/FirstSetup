import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SideNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
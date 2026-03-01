import { Component } from '@angular/core';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.html',
  styleUrl: './mainboard.scss',
  standalone:false
})
export class Mainboard {

  optionLabel : string | null = null;

  //handle Option Emit event
  handleEmittedOption(value : string | null){
    this.optionLabel = value;
  }
}

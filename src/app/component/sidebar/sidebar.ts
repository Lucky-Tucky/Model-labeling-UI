import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone:false
})
export class Sidebar {

  /**Emit option Value */
  @Output() optionEmitter : EventEmitter<string|null> = new EventEmitter();

  private _optionValue : string | null = null; 

  options: Options =
    {
      label: [
        {
          level: 1,
          label: "Sky"
        },
        {
          level: 2,
          label: "Cloud"
        }
      ],
      options: ["Option 1", "Option 1.1"] 
    };


  ngOnInit(){
    this.sortingOptions();
  }

  get lastOptionLevel(): number {
    const n : number = this.options.label.length
    return this.options.label[n - 1].level;
  }

  sortingOptions(){
    this.options.label.sort((a,b) => a.level - b.level);
  }

  get optionValue() : string|null {
    return this._optionValue;
  }

  set optionValue(value:string|null){
    this._optionValue=value;
    this.optionEmitter.emit(value);
  }
  
}

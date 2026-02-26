import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone:false
})
export class Sidebar {

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
    }
  ;

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
}

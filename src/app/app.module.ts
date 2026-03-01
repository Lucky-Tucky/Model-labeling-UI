import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLabelContainer } from './component/data-label-container/data-label-container';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from './component/sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { Mainboard } from './component/mainboard/mainboard';

@NgModule({
  declarations: [
    DataLabelContainer,
    Sidebar,
    Mainboard
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    DataLabelContainer,
    Sidebar,
    Mainboard
  ]
})
export class AppModule { }
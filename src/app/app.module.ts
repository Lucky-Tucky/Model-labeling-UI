import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLabelContainer } from './component/data-label-container/data-label-container';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from './component/sidebar/sidebar';

@NgModule({
  declarations: [
    DataLabelContainer,
    Sidebar
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports:[
    DataLabelContainer,
    Sidebar
  ]
})
export class AppModule { }
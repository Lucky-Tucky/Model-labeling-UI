import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLabelContainer } from './component/data-label-container/data-label-container';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DataLabelContainer
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports:[
    DataLabelContainer
  ]
})
export class AppModule { }
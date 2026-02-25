import { Component, ElementRef, HostBinding, Input, QueryList, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-data-label-container',
  templateUrl: './data-label-container.html',
  styleUrl: './data-label-container.scss',
  standalone:false
})
export class DataLabelContainer {

  @ViewChildren("boxElement") boxes!: QueryList<ElementRef<HTMLDivElement>>;

  @HostBinding('style.width.px')
  @Input() width : number = 2;

  boxCoordinates : BoundingBox[] = [];


  handleClick(event: MouseEvent) {
    console.log("Clicked at: ", event.clientX, event.clientY);
    const ele = event.target as HTMLElement;
    const rect = ele.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.boxCoordinates.push({ id: new Date().getTime(), x, y, width: 100, height: 100 });

    this.boxes.forEach((box) => {
      const boxStyle = box.nativeElement.getBoundingClientRect();
      const rect = ele.getBoundingClientRect();

      const x = boxStyle.x - rect.left;
      const y = boxStyle.y - rect.top;

      console.log("Box at: ", x, y);

    });

  }

  deleteBox(event : PointerEvent, index : number) {
    event.stopPropagation();
    console.log("Deleting box at index: ", index);
    this.boxCoordinates.splice(index,1);
  }

}

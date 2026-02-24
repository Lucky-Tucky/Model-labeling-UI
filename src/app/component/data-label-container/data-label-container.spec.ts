import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLabelContainer } from './data-label-container';

describe('DataLabelContainer', () => {
  let component: DataLabelContainer;
  let fixture: ComponentFixture<DataLabelContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLabelContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataLabelContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

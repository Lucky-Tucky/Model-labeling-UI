import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainboard } from './mainboard';

describe('Mainboard', () => {
  let component: Mainboard;
  let fixture: ComponentFixture<Mainboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

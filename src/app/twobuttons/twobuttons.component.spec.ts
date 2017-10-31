import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobuttonsComponent } from './twobuttons.component';

describe('TwobuttonsComponent', () => {
  let component: TwobuttonsComponent;
  let fixture: ComponentFixture<TwobuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwobuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwobuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

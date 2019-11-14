import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsSabComponent } from './concerts-sab.component';

describe('ConcertsSabComponent', () => {
  let component: ConcertsSabComponent;
  let fixture: ComponentFixture<ConcertsSabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsSabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsSabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

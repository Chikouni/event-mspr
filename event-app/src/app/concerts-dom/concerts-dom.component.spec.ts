import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsDomComponent } from './concerts-dom.component';

describe('ConcertsDomComponent', () => {
  let component: ConcertsDomComponent;
  let fixture: ComponentFixture<ConcertsDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

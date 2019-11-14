import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteDetailComponent } from './artiste-detail.component';

describe('ArtisteDetailComponent', () => {
  let component: ArtisteDetailComponent;
  let fixture: ComponentFixture<ArtisteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

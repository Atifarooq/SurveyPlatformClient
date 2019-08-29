import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCrudComponent } from './survey-crud.component';

describe('SurveyCrudComponent', () => {
  let component: SurveyCrudComponent;
  let fixture: ComponentFixture<SurveyCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

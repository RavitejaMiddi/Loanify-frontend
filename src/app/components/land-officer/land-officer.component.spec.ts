import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfficerComponent } from './land-officer.component';

describe('LandOfficerComponent', () => {
  let component: LandOfficerComponent;
  let fixture: ComponentFixture<LandOfficerComponent>;
  /*
  *this is a test
  *group test cases under common description.
  */


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandOfficerComponent ]
    })
    .compileComponents();
  }));
  /*fetch dependencies.
  */

  beforeEach(() => {
    fixture = TestBed.createComponent(LandOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

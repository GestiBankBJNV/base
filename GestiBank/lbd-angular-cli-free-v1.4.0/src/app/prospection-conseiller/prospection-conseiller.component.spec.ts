import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectionConseillerComponent } from './prospection-conseiller.component';

describe('ProspectionConseillerComponent', () => {
  let component: ProspectionConseillerComponent;
  let fixture: ComponentFixture<ProspectionConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectionConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectionConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

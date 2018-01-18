import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFicheConseillerComponent } from './admin-fiche-conseiller.component';

describe('AdminFicheConseillerComponent', () => {
  let component: AdminFicheConseillerComponent;
  let fixture: ComponentFixture<AdminFicheConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFicheConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFicheConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

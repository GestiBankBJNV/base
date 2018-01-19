import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConseillersComponent } from './admin-conseillers.component';

describe('AdminConseillersComponent', () => {
  let component: AdminConseillersComponent;
  let fixture: ComponentFixture<AdminConseillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConseillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConseillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

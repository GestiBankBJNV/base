import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAffectationsComponent } from './admin-affectations.component';

describe('AdminAffectationsComponent', () => {
  let component: AdminAffectationsComponent;
  let fixture: ComponentFixture<AdminAffectationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAffectationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAffectationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

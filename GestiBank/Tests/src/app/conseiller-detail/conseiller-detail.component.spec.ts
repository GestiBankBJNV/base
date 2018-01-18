import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerDetailComponent } from './conseiller-detail.component';

describe('ConseillerDetailComponent', () => {
  let component: ConseillerDetailComponent;
  let fixture: ComponentFixture<ConseillerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerAccueilComponent } from './conseiller-accueil.component';

describe('ConseillerAccueilComponent', () => {
  let component: ConseillerAccueilComponent;
  let fixture: ComponentFixture<ConseillerAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

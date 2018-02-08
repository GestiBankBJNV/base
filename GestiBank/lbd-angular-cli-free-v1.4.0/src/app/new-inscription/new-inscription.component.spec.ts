import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInscriptionComponent } from './new-inscription.component';

describe('NewInscriptionComponent', () => {
  let component: NewInscriptionComponent;
  let fixture: ComponentFixture<NewInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

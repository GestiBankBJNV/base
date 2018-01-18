import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComptesComponent } from './client-comptes.component';

describe('ClientComptesComponent', () => {
  let component: ClientComptesComponent;
  let fixture: ComponentFixture<ClientComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

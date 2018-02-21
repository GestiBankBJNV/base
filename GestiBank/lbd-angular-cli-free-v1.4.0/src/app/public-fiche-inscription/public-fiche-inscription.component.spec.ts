import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFicheInscriptionComponent } from './public-fiche-inscription.component';

describe('PublicFicheInscriptionComponent', () => {
  let component: PublicFicheInscriptionComponent;
  let fixture: ComponentFixture<PublicFicheInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicFicheInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFicheInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

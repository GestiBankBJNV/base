import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDevisesComponent } from './public-devises.component';

describe('PublicDevisesComponent', () => {
  let component: PublicDevisesComponent;
  let fixture: ComponentFixture<PublicDevisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDevisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDevisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTechniciensComponent } from './afficher-techniciens.component';

describe('AfficherTechniciensComponent', () => {
  let component: AfficherTechniciensComponent;
  let fixture: ComponentFixture<AfficherTechniciensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherTechniciensComponent]
    });
    fixture = TestBed.createComponent(AfficherTechniciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

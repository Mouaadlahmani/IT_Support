import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUtilisateursComponent } from './afficher-utilisateurs.component';

describe('AfficherUtilisateursComponent', () => {
  let component: AfficherUtilisateursComponent;
  let fixture: ComponentFixture<AfficherUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherUtilisateursComponent]
    });
    fixture = TestBed.createComponent(AfficherUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

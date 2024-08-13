import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEquipementsComponent } from './afficher-equipements.component';

describe('AfficherEquipementsComponent', () => {
  let component: AfficherEquipementsComponent;
  let fixture: ComponentFixture<AfficherEquipementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherEquipementsComponent]
    });
    fixture = TestBed.createComponent(AfficherEquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

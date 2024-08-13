import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPannesComponent } from './afficher-pannes.component';

describe('AfficherPannesComponent', () => {
  let component: AfficherPannesComponent;
  let fixture: ComponentFixture<AfficherPannesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherPannesComponent]
    });
    fixture = TestBed.createComponent(AfficherPannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

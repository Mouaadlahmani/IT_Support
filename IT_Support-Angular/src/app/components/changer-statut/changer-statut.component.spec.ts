import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerStatutComponent } from './changer-statut.component';

describe('ChangerStatutComponent', () => {
  let component: ChangerStatutComponent;
  let fixture: ComponentFixture<ChangerStatutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangerStatutComponent]
    });
    fixture = TestBed.createComponent(ChangerStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

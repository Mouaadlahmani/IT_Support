import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerTicketComponent } from './assigner-ticket.component';

describe('AssignerTicketComponent', () => {
  let component: AssignerTicketComponent;
  let fixture: ComponentFixture<AssignerTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignerTicketComponent]
    });
    fixture = TestBed.createComponent(AssignerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

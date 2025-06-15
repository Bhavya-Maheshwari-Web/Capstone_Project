import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketConfirmation } from './ticket-confirmation';

describe('TicketConfirmation', () => {
  let component: TicketConfirmation;
  let fixture: ComponentFixture<TicketConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

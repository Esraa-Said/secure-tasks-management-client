import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendForgetPasswordEmail } from './send-forget-password-email';

describe('SendForgetPasswordEmail', () => {
  let component: SendForgetPasswordEmail;
  let fixture: ComponentFixture<SendForgetPasswordEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendForgetPasswordEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendForgetPasswordEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

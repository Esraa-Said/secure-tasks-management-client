import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerificationEmailComponent } from './send-verification-email-component';

describe('SendVerificationEmailComponent', () => {
  let component: SendVerificationEmailComponent;
  let fixture: ComponentFixture<SendVerificationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendVerificationEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendVerificationEmailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

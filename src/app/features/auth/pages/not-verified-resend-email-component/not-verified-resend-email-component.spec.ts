import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotVerifiedResendEmailComponent } from './not-verified-resend-email-component';

describe('NotVerifiedResendEmailComponent', () => {
  let component: NotVerifiedResendEmailComponent;
  let fixture: ComponentFixture<NotVerifiedResendEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotVerifiedResendEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotVerifiedResendEmailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

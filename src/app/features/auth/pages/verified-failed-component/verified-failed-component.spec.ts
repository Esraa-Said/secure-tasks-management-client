import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedFailedComponent } from './verified-failed-component';

describe('VerifiedFailedComponent', () => {
  let component: VerifiedFailedComponent;
  let fixture: ComponentFixture<VerifiedFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedFailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedFailedComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

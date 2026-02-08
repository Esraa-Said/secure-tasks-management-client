import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedSuccessfullyComponent } from './verified-successfully-component';

describe('VerifiedSuccessfullyComponent', () => {
  let component: VerifiedSuccessfullyComponent;
  let fixture: ComponentFixture<VerifiedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedSuccessfullyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedSuccessfullyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

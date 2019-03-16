import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetAgreementComponent } from './fleet-agreement.component';

describe('FleetAgreementComponent', () => {
  let component: FleetAgreementComponent;
  let fixture: ComponentFixture<FleetAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

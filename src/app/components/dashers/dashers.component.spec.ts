import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashersComponent } from './dashers.component';

describe('DashersComponent', () => {
  let component: DashersComponent;
  let fixture: ComponentFixture<DashersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSessionsComponent } from './race-sessions.component';

describe('RaceSessionsComponent', () => {
  let component: RaceSessionsComponent;
  let fixture: ComponentFixture<RaceSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

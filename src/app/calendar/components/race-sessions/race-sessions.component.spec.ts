import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRaceSessionsComponent } from './race-sessions.component';

describe('RaceSessionsComponent', () => {
  let component: CalendarRaceSessionsComponent;
  let fixture: ComponentFixture<CalendarRaceSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarRaceSessionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarRaceSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

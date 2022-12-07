import { ComponentFixture, TestBed } from '@angular/core/testing';
import { raceDummy } from '@shared/dummies/race.dummy';

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
    component.race = raceDummy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

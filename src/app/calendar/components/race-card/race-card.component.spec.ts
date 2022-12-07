import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryEmojiComponent } from '@shared/components/country-emoji/country-emoji.component';
import { raceDummy } from '@src/app/shared/dummies/race.dummy';
import { CalendarRaceSessionsComponent } from '@app/calendar/components/race-sessions/race-sessions.component';

import { CalendarRaceCardComponent } from './race-card.component';

fdescribe('CalendarRaceCardComponent', () => {
  let component: CalendarRaceCardComponent;
  let fixture: ComponentFixture<CalendarRaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalendarRaceCardComponent,
        CalendarRaceSessionsComponent,
        CountryEmojiComponent,
      ],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarRaceCardComponent);
    component = fixture.componentInstance;
    component.race = raceDummy;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

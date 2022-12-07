import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEmojiComponent } from './country-emoji.component';

describe('CountryEmojiComponent', () => {
  let component: CountryEmojiComponent;
  let fixture: ComponentFixture<CountryEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryEmojiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input } from '@angular/core';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-country-emoji',
  templateUrl: './country-emoji.component.html',
  styleUrls: ['./country-emoji.component.css'],
})
export class CountryEmojiComponent {
  @Input() country: Location['country'] = '';

  flags: { [index: string]: string } = {
    Australia: '🇦🇺',
    Austria: '🇦🇹',
    Azerbaijan: '🇦🇿',
    Bahrain: '🇧🇭',
    Belgium: '🇧🇪',
    Brazil: '🇧🇷',
    Canada: '🇨🇦',
    France: '🇫🇷',
    Hungary: '🇭🇺',
    Italy: '🇮🇹',
    Japan: '🇯🇵',
    Mexico: '🇲🇽',
    Monaco: '🇲🇨',
    Netherlands: '🇳🇱',
    'Saudi Arabia': '🇸🇦',
    Singapore: '🇸🇬',
    Spain: '🇪🇸',
    UAE: '🇦🇪',
    UK: '🇬🇧',
    USA: '🇺🇸',
  };
}

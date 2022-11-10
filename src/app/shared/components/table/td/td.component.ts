import { Component } from '@angular/core';

@Component({
  selector: 'td[appTableTd]',
  host: { class: 'px-5 py-4' },
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css'],
})
export class TableTdComponent {}

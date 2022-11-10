import { Component } from '@angular/core';

@Component({
  selector: 'thead[appTableHead]',
  host: { class: 'sticky top-24 bg-slate-200 dark:bg-slate-800 text-left' },
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class TableHeadComponent {}

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'tr[appTableTr]',
  host: {
    class:
      'bg-slate-100 dark:bg-slate-900 border-b border-b-slate-200 dark:border-b-slate-800',
  },
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.css'],
})
export class TableTrComponent {}

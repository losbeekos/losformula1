import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caption[appTableCaption]',
  host: {
    class:
      'bg-slate-100 dark:bg-slate-900 text-2xl font-bold text-left sticky top-0 py-8',
  },
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css'],
})
export class TableCaptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

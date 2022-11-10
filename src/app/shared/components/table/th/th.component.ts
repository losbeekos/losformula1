import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'th[appTableTh]',
  host: { class: 'px-5 py-4' },
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css'],
})
export class TableThComponent {
  @Input() first = false;
  @Input() last = false;

  @HostBinding('class.rounded-l-xl') get firstItem() {
    return this.first;
  }

  @HostBinding('class.rounded-r-xl') get lastItem() {
    return this.last;
  }
}

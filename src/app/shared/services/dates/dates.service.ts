import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  get today(): string {
    return new Date().toDateString();
  }

  inFuture(date: string): boolean {
    return Date.parse(date) >= Date.parse(this.today);
  }

  inPast(date: string): boolean {
    return Date.parse(date) < Date.parse(this.today);
  }
}

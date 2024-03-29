import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService {
  readonly http = inject(HttpClient);

  protected get<T>(url: string, params?: object): Observable<T> {
    const p = new URLSearchParams({ ...params });
    return this.http.get<T>(`${environment.API_URL}/${url}.json?${p}`);
  }
}

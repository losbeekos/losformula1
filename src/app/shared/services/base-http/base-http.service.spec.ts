import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@src/environments/environment';
import { DriverStandings } from '@shared/models/driver.model';
import { driverStandingsDummy } from '@shared/dummies/driver.dummy';

import { BaseHttpService } from './base-http.service';

describe('BaseHttpService', () => {
  let service: BaseHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BaseHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('it should return an Observable<DriverStandingsList>', (done) => {
    service
      .get<DriverStandings>('current/driverstandings')
      .subscribe((standings) => {
        expect(standings).toBe(driverStandingsDummy);
        done();
      });

    const req = httpMock.expectOne(
      `${environment.API_URL}/current/driverstandings.json`
    );
    expect(req.request.method).toBe('GET');
    req.flush(driverStandingsDummy);
  });
});

import { MRData } from './api.model';
import { Constructor } from './constructor.model';

export interface Driver {
  permanentNumber: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriverMRData extends MRData {
  StandingsTable: DriverStandingsTable;
}

export interface DriverStandings {
  MRData: DriverMRData;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface DriverStandingsTable {
  season: string;
  StandingsLists: DriverStandingsList[];
}

export interface DriverStandingsList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

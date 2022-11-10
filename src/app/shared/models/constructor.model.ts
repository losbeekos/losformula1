import { MRData } from './api.model';

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface ConstructurMRData extends MRData {
  StandingsTable: ConstructorStandingsTable;
}

export interface ConstructorStandings {
  MRData: ConstructurMRData;
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export interface ConstructorStandingsTable {
  season: string;
  StandingsLists: ConstructorStandingsList[];
}

export interface ConstructorStandingsList {
  season: string;
  round: string;
  ConstructorStandings: ConstructorStanding[];
}

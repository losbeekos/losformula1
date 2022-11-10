import { RaceTable } from './race.model';

export interface Schedule {
  MRData: ScheduleMRData;
}

export interface ScheduleMRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

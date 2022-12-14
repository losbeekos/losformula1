import { Circuit } from './circuit.model';

export interface RaceTable {
  season: string;
  Races: Race[];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: RaceTime;
  SecondPractice: RaceTime;
  ThirdPractice?: RaceTime;
  Qualifying: RaceTime;
  Sprint?: RaceTime;
}

export interface RaceTime {
  date: string;
  time: string;
}

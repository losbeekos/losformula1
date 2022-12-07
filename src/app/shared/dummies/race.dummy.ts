import { Race } from '@shared/models/race.model';
import { circuitBrazilDummy, circuitDummy } from './circuit.dummy';

export const raceDummy: Race = {
  season: '2022',
  round: '15',
  url: 'http://en.wikipedia.org/wiki/2022_Dutch_Grand_Prix',
  raceName: 'Dutch Grand Prix',
  Circuit: circuitDummy,
  date: '2022-09-04',
  time: '13:00:00Z',
  FirstPractice: {
    date: '2022-09-02',
    time: '10:30:00Z',
  },
  SecondPractice: {
    date: '2022-09-02',
    time: '14:00:00Z',
  },
  ThirdPractice: {
    date: '2022-09-03',
    time: '10:00:00Z',
  },
  Qualifying: {
    date: '2022-09-03',
    time: '13:00:00Z',
  },
};

export const raceWithSprintDummy: Race = {
  season: '2022',
  round: '21',
  url: 'http://en.wikipedia.org/wiki/2022_Brazilian_Grand_Prix',
  raceName: 'Brazilian Grand Prix',
  Circuit: circuitBrazilDummy,
  date: '2022-11-13',
  time: '18:00:00Z',
  FirstPractice: {
    date: '2022-11-11',
    time: '15:30:00Z',
  },
  Qualifying: {
    date: '2022-11-11',
    time: '19:00:00Z',
  },
  SecondPractice: {
    date: '2022-11-12',
    time: '15:30:00Z',
  },
  Sprint: {
    date: '2022-11-12',
    time: '19:30:00Z',
  },
};

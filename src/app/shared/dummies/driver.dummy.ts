import {
  Driver,
  DriverMRData,
  DriverStanding,
  DriverStandings,
  DriverStandingsList,
  DriverStandingsTable,
} from '@shared/models/driver.model';
import { mrDataDummy } from './api.dummy';
import { constructorDummy } from './contructor.dummy';

export const driverDummy: Driver = {
  permanentNumber: '33',
  givenName: 'Max',
  familyName: 'Verstappen',
  dateOfBirth: '1997-09-30',
  nationality: 'Dutch',
};

export const driverStandingDummy: DriverStanding = {
  position: '1',
  positionText: '1',
  points: '454',
  wins: '15',
  Driver: driverDummy,
  Constructors: [constructorDummy],
};

export const driverStandingsListDummy: DriverStandingsList = {
  season: '2022',
  round: '22',
  DriverStandings: [driverStandingDummy],
};

export const driverStandingsTableDummy: DriverStandingsTable = {
  season: '2022',
  StandingsLists: [driverStandingsListDummy],
};

export const driverMRDataDummy: DriverMRData = {
  ...mrDataDummy,
  StandingsTable: driverStandingsTableDummy,
};

export const driverStandingsDummy: DriverStandings = {
  MRData: driverMRDataDummy,
};

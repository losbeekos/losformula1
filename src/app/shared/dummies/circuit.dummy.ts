import { Circuit } from '@shared/models/circuit.model';

export const circuitDummy: Circuit = {
  circuitId: 'zandvoort',
  url: 'http://en.wikipedia.org/wiki/Circuit_Zandvoort',
  circuitName: 'Circuit Park Zandvoort',
  Location: {
    lat: '52.3888',
    long: '4.54092',
    locality: 'Zandvoort',
    country: 'Netherlands',
  },
};

export const circuitBrazilDummy: Circuit = {
  circuitId: 'interlagos',
  url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace',
  circuitName: 'Autódromo José Carlos Pace',
  Location: {
    lat: '-23.7036',
    long: '-46.6997',
    locality: 'São Paulo',
    country: 'Brazil',
  },
};

import { Car } from 'src/app/car';

const mockCar1: Car = {
  model: 'Tesla',
  price: 123546,
};

const mockCar2: Car = {
  model: 'Honda',
  price: 1534,
};

const mockCar3: Car = {
  model: 'Axia',
  price: 153245,
};

const mockCarArray: Car[] = [mockCar1, mockCar2, mockCar3];

export { mockCar1, mockCar2, mockCar3, mockCarArray };
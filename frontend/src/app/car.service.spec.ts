import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { CarService } from './car.service';


describe('CarService', () => {
  let service: CarService;
  let httpController: HttpTestingController;
  
  let url = 'http://localhost/cars/backend/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CarService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


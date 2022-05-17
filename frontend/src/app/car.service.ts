//to place the method to communicate with the server in a service
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';//to expose to the async pipe

//import { map } from 'rxjs/operators';
import { Car } from './car';
import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//initiating the observables
export class CarService {

  baseUrl = 'http://localhost/cars/backend/api';
  //letak kat environment

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
}

//store method is an observable
store(car: Car) {
  return this.http.post(`${this.baseUrl}/store`, { data: car }).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}

update(car: Car){
  return this.http.put(`${this.baseUrl}/update`, { data: car });
}

delete(id: any) {
  const params = new HttpParams()
    .set('id', id.toString());

  return this.http.delete(`${this.baseUrl}/delete`, { params: params });
}

handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}
}

//component to subscribes to the data that the service fetches from the server
//displaying the data to the client
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from './car';
import { CarService } from './car.service'; //dependency

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'cars';
  cars: Car[] = [];
  car: Car =  {model:'', price:0};
  error = '';
  success = '';
        
  constructor(private carService: CarService) {
  }//create controller
  
  //below is a special lifecycle hook, after constructor 
  //good place to get the array of cars into the controller.
  ngOnInit():void {
    this.getCars();
  }

//Got error control
  getCars(){    
    //console.log(this.cars); //zero array
    this.carService.getAll().subscribe(
      {next:(data: Car[])=>{
        this.cars = data;
        console.log(this.cars);},
      error(){console.error('Observer got an error: ' );},
      complete(){
        // Notify all complete callbacks
        console.log('success')
      }});
      //console.log(this.cars);
    }
/*
    getCars(){
      this.carService
    }*/

  addCar(f: NgForm) {    
    this.resetAlerts();
    this.carService.store(this.car).subscribe(
      {next(res: Car){
        // Update the list of cars
        this.cars.push(res);
        // Inform the user
        this.success = 'Created successfully';
        // Reset the form
        f.reset(); },
      error() {console.error('Observer got an error: ' );
      }});
    }
  
  updateCar(name: any, price: any, id: any){
    this.resetAlerts();

    this.carService
    .update({ model: name.value, price: price.value, id: +id })
    .subscribe({
      next(res){
        this.success = 'Update successfully';
      },
      error() {console.error('Observer got an error SKRTSKRT: ' );
    }});
  }

  //ERROR FILTER IN CONSOLE.LOG WHEN NO FILTER 
  deleteCar(id: number) {
    this.resetAlerts();
    this.carService.delete(id).subscribe(
      {next(res){
        this.cars = this.cars.filter(function (item) {
          return item['id'] && +item['id'] !== +id;
        });

        this.success = 'Deleted successfully';
      },
      error(){console.error('Observer got an error: ' );
    }});
}

  resetAlerts() {
    this.error = '';
    this.success = '';
  }
}
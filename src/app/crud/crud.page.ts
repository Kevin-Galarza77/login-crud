import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  cars: any[] = [];


  constructor(private carService: FirestoreService) { }


  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this.carService.getCars().subscribe({
      next: result => {
        this.cars = result;
      }
    });
  }

  updateCar(car_id: any) {

    const color = ['ROJO', 'NEGRO', 'BLANCO', 'GRIS', 'VERDE'];
    const indiceAleatorio = Math.floor(Math.random() * color.length);
    const randomWord = color[indiceAleatorio];
    const placa = ['AAA 1111', 'BBB 2222', 'CCC 3333', 'DDD 4444', 'EEE 5555'];
    const indiceAleatorioplaca = Math.floor(Math.random() * placa.length);
    const randomplaca = placa[indiceAleatorioplaca];

    const car = { color: randomWord, placa: randomplaca };

    this.carService.updateCar(car_id, car).then(
      result => {
        this.getCars();
      }
    ).catch(e => console.log(e));

  }


  deleteCar(car_id: any) {
    this.carService.deleteCar(car_id).then(
      result => {
        this.getCars();
        console.log(result);
      }
    ).catch(e => console.log(e));
    console.log(car_id);
  }


}

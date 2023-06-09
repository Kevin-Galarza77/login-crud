import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  cars: any[]=[];


  constructor(private carService: FirestoreService) {}


  ngOnInit() {

  }

}

import { Injectable } from '@angular/core';
import { Human } from './human.model';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  private arr:Human[] = [];
  AddNewUser(hu:Human){
    this.arr.push(hu)
  }
  getData(){
    return this.arr
  }
}

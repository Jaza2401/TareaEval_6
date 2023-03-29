import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServDataService {

  constructor() { }
  

  findEmpleado(){
    const data:any = localStorage.getItem("data");
    const posVar = localStorage.getItem("var");

    let result = (JSON.parse(data).ids).indexOf(posVar?.replace(/['"]+/g, ''));
    return result;
  }
}

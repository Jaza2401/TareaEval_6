import { Component } from '@angular/core';
import { ServDataService } from '../serv-data.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent{

  constructor(private info:ServDataService){};

  data:any = JSON.parse(localStorage.getItem("data"));

  newItemID = this.data.ids[this.info.findEmpleado()];
  newItemType = this.data.types[this.info.findEmpleado()];
  newItemName = this.data.names[this.info.findEmpleado()];
  newItemPrice = this.data.prices[this.info.findEmpleado()];
  newItemStock = this.data.stocks[this.info.findEmpleado()];

  updateItem(){
    this.data.types[this.info.findEmpleado()] = this.newItemType;
    this.data.names[this.info.findEmpleado()] = this.newItemName;
    this.data.prices[this.info.findEmpleado()] = this.newItemPrice;
    this.data.stocks[this.info.findEmpleado()] = this.newItemStock;

    localStorage.setItem("data", JSON.stringify(this.data));
    window.location.assign("/products");
  }
}

import { Component, Injectable, OnInit } from '@angular/core';
import { ServDataService } from '../serv-data.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit{

  newItemID = '';
  newItemType = '';
  newItemName = '';
  newItemPrice = '';
  newItemStock = '';
  newItemImg = '';


  ngOnInit(){
    
  }

  addItem() {
    const data = localStorage.getItem('data'); 
    let json;
    console.log("Hello");

    if (data) {
        const parsed_data = JSON.parse(data);
        json  = {
        ids: parsed_data["ids"].concat([this.newItemID]), 
        types: parsed_data["types"].concat([this.newItemType]),
        names: parsed_data["names"].concat([this.newItemName]), 
        prices: parsed_data["prices"].concat([this.newItemPrice]),
        stocks: parsed_data["stocks"].concat([this.newItemStock]),
        images: parsed_data["images"].concat([this.newItemImg])
      };
    }
    else {
      json = {
        ids: [this.newItemID], 
        types: [this.newItemType],
        names: [this.newItemName], 
        prices: [this.newItemPrice],
        stocks: [this.newItemStock],
        images: [this.newItemImg]
      };
    }
    localStorage.setItem("data", JSON.stringify(json));
    window.location.assign("/products");
}
}

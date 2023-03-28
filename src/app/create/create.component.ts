import { Component } from '@angular/core';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  newItemID = '';
  newItemType = '';
  newItemName = '';
  newItemPrice = '';
  newItemStock = '';

  addItem() {

    const data = localStorage.getItem('data'); 
    let json;

    if (data) {
        const parsed_data = JSON.parse(data);
        json  = {
        ids: parsed_data["ids"].concat([this.newItemID]), 
        types: parsed_data["types"].concat([this.newItemType]),
        names: parsed_data["names"].concat([this.newItemName]), 
        prices: parsed_data["prices"].concat([this.newItemPrice]),
        stocks: parsed_data["stocks"].concat([this.newItemStock])
      };
    }
    else {
      json = {
        ids: [this.newItemID], 
        types: [this.newItemType],
        names: [this.newItemName], 
        prices: [this.newItemPrice],
        stocks: [this.newItemStock] 
      };
    }
    localStorage.setItem("data", JSON.stringify(json));
    window.location.assign("/products");
}
}
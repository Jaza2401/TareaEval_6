import { Component } from '@angular/core';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  newItemID = '';
  newItemName = '';
  newItemPrice = '';

  addItem() {

    const data = localStorage.getItem('data'); 
    let json;

    if (data) {
       const parsed_data = JSON.parse(data);
       json  = {
        ids: parsed_data["ids"].concat([this.newItemID]), 
        names: parsed_data["names"].concat([this.newItemName]), 
        prices: parsed_data["prices"].concat([this.newItemPrice])
      };
    }
    else {
      json = {
        ids: [this.newItemID], 
        names: [this.newItemName], 
        prices: [this.newItemPrice], 
      };
    }
    localStorage.setItem("data", JSON.stringify(json));
    window.location.reload();

}
}
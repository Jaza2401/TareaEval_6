import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {
  data = localStorage.getItem('data');
  newItemID = '';
  newItemType = '';
  newItemName = '';
  newItemPrice = '';
  newItemStock = '';

  updateItem(){
    console.log("hola");
  }
}

import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  items: any[] = [
    {
      id: "COS01",
      type: "Cosmetic",
      name: "Sephora Skin Care",
      price: "45.50",
      stock: "4"
}];
  ngOnInit() {
    const data = localStorage.getItem('data'); 
    console.log(data);

    if (data) {
      const parsed_data = JSON.parse(data);   
      console.log(parsed_data);
      for (let i = 0; i < parsed_data["names"].length; i++) {
        this.items.push({
          id: parsed_data["ids"][i],
          type: parsed_data["types"][i],
          name: parsed_data["names"][i],
          price: parsed_data["prices"][i],
          stock: parsed_data["stocks"][i]
        });
      }
    }
  }
  
  controlVar(id:string){
    localStorage.setItem('var',JSON.stringify(id));
  }
}

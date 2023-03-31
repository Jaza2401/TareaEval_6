import { Component, Injectable, OnInit, TemplateRef } from '@angular/core';
import {DeleteComponent} from '../delete/delete.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  items: any[] = [];
  ngOnInit() {

    const data = localStorage.getItem('data'); 

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

  delete_product(id:string) {
    let json:any = {
      ids: [],
      types: [],
      names: [],
      prices: [],
      stocks: [],
      images: [],
    };

    const data = localStorage.getItem('data'); 

    if (data) {
      const parsed_data = JSON.parse(data);   
      for (let i = 0; i < parsed_data["names"].length; i++) {

        if (parsed_data["ids"][i] == id) {
          continue;
        }

        else {
            json["ids"].push(parsed_data["ids"][i]);
            json["types"].push(parsed_data["types"][i]);
            json["names"].push(parsed_data["names"][i]);
            json["prices"].push(parsed_data["prices"][i]);
            json["stocks"].push(parsed_data["stocks"][i]);
            json["images"].push(parsed_data["images"][i]);
        }
      };
    }
    localStorage.setItem("data", JSON.stringify(json));
    window.location.assign("/products");
  }
}

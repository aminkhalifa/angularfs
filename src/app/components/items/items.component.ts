import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items:Item[];
editState :boolean=false;
itemToEdit:Item;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items=>{
      this.items=items;
      //console.log(this.items);
    })
  }
  deleteItem(event,item:Item){
    //console.log(item);
  this.clearState();
  this.itemService.deleteItem(item);
}
editItem(event,item:Item){
  this.editState = true;
  this.itemToEdit = item;
}
updateItem(item:Item){
  this.itemService.updateItem(item);
  this.clearState();
}
clearState(){
  this.editState = false;
  this.itemToEdit = null;
}
}

import { Component, OnInit, Inject } from "@angular/core";
import { Item } from "../api-items/item.model";
import { ApiItemsService } from "../api-items/api-items.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'mostrar-items',
    templateUrl: './mostrarItems.component.html',
    styleUrls: ['mostrarItems.component.css'],
  
})

export class MostrarItems implements OnInit {
   
    items: Item[];
    itemId: number;
    item: Item;

    
    constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}

    ngOnInit(): void{
        this.apiItemsService.getAllItems().subscribe(items => this.items = items);
    }

    
}
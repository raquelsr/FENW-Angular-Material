import { Component, OnInit } from "@angular/core";
import { Item } from "../api-items/item.model";
import { ApiItemsService } from "../api-items/api-items.service";

@Component({
    selector: 'mostrar-items',
    templateUrl: './mostrarItems.component.html'
})

export class MostrarItems implements OnInit {

    items: Item[];

    constructor(private apiItemsService: ApiItemsService) { }

    ngOnInit(): void{
        this.apiItemsService.getAllItems().subscribe(items => this.items = items);
    }
}
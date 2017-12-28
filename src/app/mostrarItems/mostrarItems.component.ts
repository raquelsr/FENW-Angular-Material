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

    constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) { }

    ngOnInit(): void{
        this.apiItemsService.getAllItems().subscribe(items => this.items = items);
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(EliminarItemDialog, {
          width: '250px',
          data: { itemId: this.itemId}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.apiItemsService.delete(this.itemId);
        });
      }
}

@Component({
    selector: 'eliminarItem-dialog',
    templateUrl: 'eliminarItem_dialog.component.html',
  })
  export class EliminarItemDialog {
  
    constructor(
      public dialogRef: MatDialogRef<EliminarItemDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
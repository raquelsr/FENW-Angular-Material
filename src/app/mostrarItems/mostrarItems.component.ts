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

    panelOpenState: boolean = false;

    
    constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}

    ngOnInit(): void{
        this.apiItemsService.getAllItems().subscribe(items => this.items = items);
        this.apiItemsService.getReadItem().subscribe(item => {
          this.verItem(item);
        });
        this.apiItemsService.getUpdateItem().subscribe(item => {
          this.prepararItem(item);
        });
    }

    read() {
      this.apiItemsService.read(this.itemId);
    }

    verItem(item: Item){
      this.item = {id: item.id, name: item.name , description: item.description};
      this.openDialogVer();
    }
    
    prepararItem(item: Item){
      this.item = {id: item.id, name: item.name , description: item.description};
      this.openDialogEditar();
    }

    editarItem() {
      this.apiItemsService.prepareUpdate(this.itemId);
    }

    openDialogEliminar(): void {
        let dialogRef = this.dialog.open(EliminarItemDialog, {
          width: '250px', 
          data: { itemId: this.itemId}
        });
    }

    openDialogEditar(): void {
        
        let dialogRef = this.dialog.open(EditarItemDialog, {
          width: '250px',
          data: {itemId: this.itemId, name: this.item.name, description: this.item.description}
        });
    }

    openDialogVer(): void {
      
      let dialogRef = this.dialog.open(VerItemDialog, {
        width: '250px',
        data: {itemId: this.itemId, name: this.item.name, description: this.item.description}
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
      @Inject(MAT_DIALOG_DATA) public data: any, private apiItemsService: ApiItemsService) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    aceptar(): void {
      this.apiItemsService.delete(this.data.itemId);
    }
  
  }

  @Component({
    selector: 'editarItem-dialog',
    templateUrl: 'editarItem_dialog.component.html',
  })
  export class EditarItemDialog {
  
    item: Item;
    
    constructor(
      public dialogRef: MatDialogRef<EditarItemDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any, private apiItemsService: ApiItemsService) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    aceptar(): void {
      this.item = {id: this.data.itemId, name: this.data.name, description: this.data.description};
      this.apiItemsService.update(this.item);
    }
  
  }

  @Component({
    selector: 'verItem-dialog',
    templateUrl: 'verItem_dialog.component.html',
  })
  export class VerItemDialog {
  
    constructor(
      public dialogRef: MatDialogRef<VerItemDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
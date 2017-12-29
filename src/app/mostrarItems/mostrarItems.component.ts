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
    updateItem: Item;
    
    constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}

    ngOnInit(): void{
        this.apiItemsService.getAllItems().subscribe(items => this.items = items);
        this.apiItemsService.getReadItem().subscribe(item => {
          this.verItem(item);
        });
        this.apiItemsService.getUpdateItem().subscribe(item => {
          alert("update" + item.name);
          this.prepararItem(item);
        });
    }

    read() {
      this.apiItemsService.read(this.itemId);
    }

    editarItem() {
      this.apiItemsService.prepareUpdate(this.itemId);
    }

    prepararItem(item: Item){
      this.updateItem = {id: item.id, name: item.name , description: item.description};
      this.openDialogEditar();
    }

    verItem(item: Item){
      this.item = {id: item.id, name: item.name , description: item.description};
      this.openDialogVer();
    }

    openDialogEliminar(): void {
        let dialogRef = this.dialog.open(EliminarItemDialog, {
          width: '250px', 
          data: { itemId: this.itemId}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.apiItemsService.delete(this.itemId);
        });
    }

    openDialogEditar(): void {
        
        let dialogRef = this.dialog.open(EditarItemDialog, {
          width: '250px',
          data: {itemId: this.itemId, name: this.updateItem.name, description: this.updateItem.description}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          alert("editar" + this.updateItem.id);
          this.updateItem = {id: this.updateItem.id, name: result.name, description: result.description};
          alert("editar" + this.updateItem.id + this.updateItem.name);

          this.apiItemsService.update(this.updateItem);
        });
    }

    openDialogVer(): void {
      
      let dialogRef = this.dialog.open(VerItemDialog, {
        width: '250px',
        data: {itemId: this.itemId, name: this.item.name, description: this.item.description}
      });
  
      dialogRef.afterClosed().subscribe(result => {
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

  @Component({
    selector: 'editarItem-dialog',
    templateUrl: 'editarItem_dialog.component.html',
  })
  export class EditarItemDialog {
  
    constructor(
      public dialogRef: MatDialogRef<EditarItemDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
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
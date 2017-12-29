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
        this.apiItemsService.getReadItem().subscribe(item => {
          this.item = {id: item.id, name:item.name, description:item.description};
          this.actualizarItemVer(item);
        });
    }

    read(id: number) {
      this.apiItemsService.read(id);
    }

    actualizarItemVer(item: Item){
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
          data: {itemId: this.itemId, name:"info"}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.apiItemsService.update(this.item);
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
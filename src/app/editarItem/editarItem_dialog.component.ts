import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ApiItemsService } from '../api-items/api-items.service';
import { Item } from '../api-items/item.model';

@Component({
  selector: 'editarItem-callDialog',
  templateUrl: 'editarItem_callDialog.component.html',
  styleUrls: ['./editarItem.component.css']

})
export class EditarItemCallDialog {

  @Input() itemId: number;
  item: Item;

  constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}

  ngOnInit(): void{
    this.apiItemsService.getUpdateItem().subscribe(item => {
      this.prepararItem(item);
    });
  }

  prepararItem(item: Item){
    this.item = {id: item.id, name: item.name , description: item.description};
    this.openDialogEditar();
  }

  editarItem() {
    if (this.itemId === undefined){
      alert("Seleccione un item.");
    } else {
      this.apiItemsService.prepareUpdate(this.itemId);
    }
  }

  openDialogEditar(): void {
        
    let dialogRef = this.dialog.open(EditarItemDialog, {
      width: '250px',
      data: {itemId: this.itemId, name: this.item.name, description: this.item.description}
    });
  }

}

@Component({
  selector: 'editarItem-dialog',
  templateUrl: 'editarItem_dialog.component.html',
  styleUrls: ['./editarItem.component.css']
})
export class EditarItemDialog {

  item: Item;
    
    constructor(
      public dialogRef: MatDialogRef<EditarItemDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any, private apiItemsService: ApiItemsService, private snackBar: MatSnackBar) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    aceptar(): void {
      this.item = {id: this.data.itemId, name: this.data.name, description: this.data.description};
      if ((this.item.name === "") || (this.item.description === "")){
        alert ("Rellene todos los campos.");
      } else {
        this.apiItemsService.update(this.item);
        this.snackBar.open("Item editado", "CERRAR", {
          duration: 2000,
        });
      }
    }

}

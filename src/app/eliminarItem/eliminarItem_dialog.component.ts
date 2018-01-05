import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ApiItemsService } from '../api-items/api-items.service';
import { Item } from '../api-items/item.model';

@Component({
  selector: 'eliminarItem-callDialog',
  templateUrl: 'eliminarItem_callDialog.component.html',
  styleUrls: ['./eliminarItem.component.css']
})
export class EliminarItemCallDialog {

  @Input() itemId: number

  constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}

  openDialogEliminar(): void {
    if (this.itemId === undefined) {
      alert("Seleccione un item.")
    } else {
      let dialogRef = this.dialog.open(EliminarItemDialog, {
        width: '250px', 
        data: {itemId: this.itemId} 
      });
    }
  }
}

@Component({
  selector: 'eliminarItem-dialog',
  templateUrl: 'eliminarItem_dialog.component.html',
  styleUrls: ['./eliminarItem.component.css']
})
export class EliminarItemDialog {

  constructor(
    public dialogRef: MatDialogRef<EliminarItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiItemsService: ApiItemsService, public snackBar: MatSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  aceptar(): void {
    this.apiItemsService.delete(this.data.itemId);
    
    this.snackBar.open("Item eliminado", "CERRAR", {
      duration: 2000,
    });
  }

}


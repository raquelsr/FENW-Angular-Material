import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiItemsService } from '../api-items/api-items.service';
import { Item } from '../api-items/item.model';

@Component({
  selector: 'crearItem-callDialog',
  templateUrl: 'crearItem_callDialog.component.html'
})
export class CrearItemCallDialog {

  name: string;
  description: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(CrearItemDialog, {
      width: '250px',
      data: { name: this.name, description: this.description }
    });

  }

}

@Component({
  selector: 'crearItem-dialog',
  templateUrl: 'crearItem_dialog.component.html',
})
export class CrearItemDialog {

  item: Item;

  constructor(
    public dialogRef: MatDialogRef<CrearItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiItemsService: ApiItemsService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  aceptar(): void {
    this.item = {id: this.data.itemId , name: this.data.name, description: this.data.description};
    this.apiItemsService.create(this.item);
  }

}

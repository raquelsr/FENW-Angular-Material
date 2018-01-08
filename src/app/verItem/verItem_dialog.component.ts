import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiItemsService } from '../api-items/api-items.service';
import { Item } from '../api-items/item.model';

@Component({
  selector: 'verItem-callDialog',
  templateUrl: 'verItem_callDialog.component.html',
  styleUrls: ['./verItem.component.css']
})
export class VerItemCallDialog {
  
  @Input() itemId: number;
  item: Item;

  constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}

  ngOnInit(): void{
    this.apiItemsService.getReadItem().subscribe(item => {
      this.verItem(item);
    });
}

read() {
  if (this.itemId === undefined){
    alert("Seleccione un item.");
  } else {
    this.apiItemsService.read(this.itemId);
  }
}

verItem(item: Item){
  this.item = {id: item.id, name: item.name , description: item.description};
  this.openDialogVer();
}

openDialogVer(): void {
  
  let dialogRef = this.dialog.open(VerItemDialog, {
    width: '30%',
    height: '300px',
    data: {itemId: this.itemId, name: this.item.name, description: this.item.description}
  });
}

}

@Component({
  selector: 'verItem-dialog',
  templateUrl: 'verItem_dialog.component.html',
  styleUrls: ['./verItem.component.css']
})
export class VerItemDialog {

  constructor(
    public dialogRef: MatDialogRef<VerItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Dialog Overview
 */
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
      data: { name: this.name, descripcion: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.description = result.description;

    });
  }

}

@Component({
  selector: 'crearItem-dialog',
  templateUrl: 'crearItem_dialog.component.html',
})
export class CrearItemDialog {

  constructor(
    public dialogRef: MatDialogRef<CrearItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

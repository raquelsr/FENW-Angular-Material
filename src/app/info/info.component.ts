import {Component} from '@angular/core';
import { MatDialog } from '@angular/material';

/**
 * @title Button varieties
 */
@Component({
  selector: 'info-component',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
})
export class InfoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(InfoComponentDialog, {
      height: '350px'
    });
  }
}



@Component({
  selector: 'infoDialog-component',
  templateUrl: 'infoDialog.component.html',
})
export class InfoComponentDialog {}
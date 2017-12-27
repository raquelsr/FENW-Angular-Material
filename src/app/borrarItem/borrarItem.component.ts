import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ApiItemsService } from "../api-items/api-items.service";


@Component({
    selector: 'borrarItem-callDialog',
    templateUrl: 'borrarItem_callDialog.component.html'
  })


  export class BorrarItemCallDialog {
      name: string;
      description: string;
      item: Item;
    
      constructor(public dialog: MatDialog, private apiItemsService: ApiItemsService) {}
    
      openDialog(): void {
        let dialogRef = this.dialog.open(CrearItemDialog, {
          width: '250px',
          data: { name: this.name, descripcion: this.description }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.item = {name: result.name, description: result.description};
          this.apiItemsService.create(this.item);
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
    
  
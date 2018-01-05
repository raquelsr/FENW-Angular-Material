import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpService } from './core/http.service';
import { ApiItemsService } from './api-items/api-items.service';

import { CrearItemCallDialog, CrearItemDialog } from './crearItem/crearItem_dialog.component';
import { MostrarItems }  from './mostrarItems/mostrarItems.component';
import { EliminarItemDialog, EliminarItemCallDialog } from './eliminarItem/eliminarItem_dialog.component';
import { EditarItemDialog, EditarItemCallDialog } from './editarItem/editarItem_dialog.component';
import { VerItemDialog, VerItemCallDialog } from './verItem/verItem_dialog.component';

import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatSnackBarModule, MatSortModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule { }

@NgModule({
  declarations: [
    AppComponent, [CrearItemCallDialog, CrearItemDialog], MostrarItems, [EditarItemDialog, EditarItemCallDialog], 
    [VerItemDialog, VerItemCallDialog], [EliminarItemCallDialog, EliminarItemDialog],
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, DemoMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FlexLayoutModule
  ],
  entryComponents: [CrearItemCallDialog, CrearItemDialog , EditarItemDialog, EditarItemCallDialog, 
    VerItemDialog,VerItemCallDialog, EliminarItemCallDialog, EliminarItemDialog],   
  providers: [HttpService, ApiItemsService],
  bootstrap: [AppComponent]
})

export class AppModule { }

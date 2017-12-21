import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpService } from './core/http.service';
import { ApiItemsService } from './api-items/api-items.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { ApiItemsComponent } from './api-items/api-items.componet';


@NgModule({
  declarations: [
    AppComponent, ApiItemsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [HttpService, ApiItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

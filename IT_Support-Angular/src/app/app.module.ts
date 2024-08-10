import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EquipementComponent } from './components/equipement/equipement.component';
import { AddEquipementComponent } from './components/add-equipement/add-equipement.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipementComponent,
    AddEquipementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

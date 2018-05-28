
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgMatComponent } from './ng-mat/ng-mat.component';
import{ AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogOverviewExampleDialog } from './ng-mat/ng-mat.component';

@NgModule({
  declarations: [
    AppComponent,
    NgMatComponent,
    DashboardComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents:[DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
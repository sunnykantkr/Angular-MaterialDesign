import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NgMatComponent } from './ng-mat/ng-mat.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes : Routes = [
    {path : '', component : DashboardComponent},
    {path : 'mat', component : NgMatComponent}
 
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { 
  
}



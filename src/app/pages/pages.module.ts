import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphOneComponent } from './graph-one/graphone.component';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,    
    GraphOneComponent,
    PagesComponent,    
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,    
    GraphOneComponent,
    PagesComponent,    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }

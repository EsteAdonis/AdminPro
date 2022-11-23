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
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,    
    GraphOneComponent,
    PagesComponent,
    AccountSettingsComponent,    
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,    
    GraphOneComponent,
    PagesComponent,    
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,    
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }

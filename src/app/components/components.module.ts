import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IncrementerComponent } from './incrementer/incrementer.component';
import { DoughnutChartComponent } from './doughnut/doughnut-chart.component';


@NgModule({
  declarations: [
    IncrementerComponent,
    DoughnutChartComponent
  ],
  exports: [
    IncrementerComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }

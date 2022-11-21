import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit  {
  @Input() title = '';
  @Input() labels: string[] = [];
  
  public doughnutChartLabels: string[] = this.labels; // [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor: ['#F2e800', '#9e120e', '#FF5800'] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    console.log(this.labels);
    this.doughnutChartData.labels = this.labels;
    console.log(this.doughnutChartData.labels);
  }
}



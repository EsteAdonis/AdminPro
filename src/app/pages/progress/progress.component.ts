import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {
  progressOne = 25;
  progressTwo = 40;

  get getProgressOne() {
    return `${this.progressOne}%`;
  }

  get getProgressTwo() {
    return `${this.progressTwo}%`;
  }

  updatedOneValue(progress: number) {
    this.progressOne = progress;
  }
}

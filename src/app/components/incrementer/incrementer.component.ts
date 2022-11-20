import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
  
export class IncrementerComponent implements OnInit  {

  @Input() progress = 0;
  @Input() btnClass = 'btn-primary';
  @Output() updatedValue: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }  

  changeValue(value: number): number {
    if (this.progress >= 100 && value >= 0) { 
      this.updatedValue.emit(100);
      return this.progress;
    }
    
    if (this.progress <= 0 && value < 0) {
      this.updatedValue.emit(0);
      return this.progress;    
    }
      
    this.progress += value;
    this.updatedValue.emit(this.progress);
    return this.progress;  
  }

  onChange(value: number) {
    if (value >= 100)
      this.progress = 100;
    else if (value <= 0) {
      this.progress = 0
    } else {
      this.progress = value;
    }

    this.updatedValue.emit( value )
  }
}

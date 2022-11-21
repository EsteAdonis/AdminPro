import { Component} from '@angular/core';

@Component({
  selector: 'app-graph-one',
  templateUrl: './graphone.component.html',
  styleUrls: ['./graphone.component.css']
})
export class GraphOneComponent {
  title = "Julio's Progress";
  labels = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  constructor() { }

}

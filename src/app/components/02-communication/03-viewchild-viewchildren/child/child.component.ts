import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(`From Child Component`);
  }

  onClick(): void {
    console.log('Click method from child, called in Parent component');
  }
}

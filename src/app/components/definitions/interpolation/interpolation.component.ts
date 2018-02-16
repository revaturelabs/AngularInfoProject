import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
    
    imageInterpolation="https://themarketingtechnologist-ghost.s3.amazonaws.com/2016/Mar/angular-1457385882793.png";
    
  constructor() { }

  ngOnInit() {
  }

}

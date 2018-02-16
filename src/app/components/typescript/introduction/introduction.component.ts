import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  image = 'https://memz.co/wp-content/uploads/2016/05/featured.jpg';

  constructor() { }

  ngOnInit() {
  }

}

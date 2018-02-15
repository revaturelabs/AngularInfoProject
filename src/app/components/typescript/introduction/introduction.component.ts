import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  image = 'https://s.gravatar.com/avatar/17e414f1d3c2a1c190a1fe04d9850286?size=496&default=retro';
  constructor() { }

  ngOnInit() {
  }

}

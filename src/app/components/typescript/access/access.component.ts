import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  docs = 'http://www.typescriptlang.org/docs/handbook/classes.html';
  image = 'http://www.escapetheory.com.au/blog/wp-content/uploads/2010/01/access_modier_chart.gif';
  constructor() { }

  ngOnInit() {
  }

}

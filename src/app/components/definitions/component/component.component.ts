import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  component = 'A component controls a patch of screen called a view.';
  componentparts = 'The class interacts with the view through an API of properties and methods.';
  componentclass = 'You define a component\'s application logic and what it does to support the view—inside a class.';
  componentflow = 'Angular creates, updates, and destroys components as the user moves through the application.';
  componentlifecycle: string = 'Angular creates it, renders it, creates and '
  + 'renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.';
  componentlifecyclehoooks: string = 'Angular offers lifecycle hooks that provide ' +
  'visibility into these key life moments and the ability to act when they occur.';

  interpolation = '{{}}';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {
   datatypesimage = 'http://i.stack.imgur.com/khNsI.png';
  datatypedocs = 'http://www.typescriptlang.org/docs/handbook/basic-types.html';

  constructor() { }

  ngOnInit() {
  }

}

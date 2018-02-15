import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  title = 'Databinding';
  databindingImage = 'https://www.ngdevelop.tech/wp-content/uploads/2017/12/Databinding-300x179.png';
  interpolation = '{{}}';

  // Property Binding
  propertyBinding = '[ ]';
  public objectStyles = {
    color: 'red',
    border: '1px solid black',
    cursor: 'pointer',
    margin: '2px'
  };

  // Event Binding
  count = 0;
  eventNotation = '( )';

  // twoWayDatabinding
  twoWayDatabinding = '[()]';

  // Two-Way Databinding
  public user = {
    email: '',
    password: ''
  };


  public changeStyles(): void {
    if (this.objectStyles.color === 'red') {
      this.objectStyles.color = 'blue';
      this.objectStyles.border = '4px groove purple';
    } else if ( this.objectStyles.color === 'blue') {
      this.objectStyles.color = 'green';
      this.objectStyles.border = '4px ridge yellow';
    } else {
      this.objectStyles.color = 'red';
      this.objectStyles.border = '4px solid black';
    }

  }

  // Click event for 1-way databinding of EventBinding
  public incrementCount(): void {
    this.count++;
  }


  constructor() { }

  ngOnInit() {
  }

}

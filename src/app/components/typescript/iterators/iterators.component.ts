import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterators',
  templateUrl: './iterators.component.html',
  styleUrls: ['./iterators.component.css']
})
export class IteratorsComponent implements OnInit {

code1 = 'let someArray = [1, "string", false];\n'
+ 'for (let entry of someArray) {\n'
+ '    console.log(entry); // 1, "string", false\n'
+ '}';

code2 = 'let list = [4, 5, 6];\n'
+ 'for (let i in list) {\n'
+ '   console.log(i); // "0", "1", "2",\n'
+ '}\n\n'
+ 'for (let i of list) {\n'
+ '   console.log(i); // "4", "5", "6"\n'
+ '}';

code3 = 'let pets = new Set(["Cat", "Dog", "Hamster"]);\n'
+ 'pets["species"] = "mammals";\n\n'
+ 'for (let pet in pets) {\n'
+ '   console.log(pet); // "species"\n'
+ '}\n\n'
+ 'for (let pet of pets) {\n'
+ '    console.log(pet); // "Cat", "Dog", "Hamster"\n'
+ '}';

  constructor() { }

  ngOnInit() {
  }

}

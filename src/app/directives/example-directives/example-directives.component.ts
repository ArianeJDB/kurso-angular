import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directives',
  templateUrl: './example-directives.component.html',
  styleUrls: ['./example-directives.component.css']
})
export class ExampleDirectivesComponent implements OnInit {

  colors: string[] = [];
  show: boolean;
  today = new Date();
  text = 'hola que tal';

  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'yellow', 'white', 'black', 'pink', 'purple'];
    this.show = true;
  }

}

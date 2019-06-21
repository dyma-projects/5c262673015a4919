import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  name: string;
  update: boolean;
  disabled: boolean;

  constructor() {
  }

  ngOnInit() {
    this.disabled = true;
    this.name = 'iddir ';
    this.update = true;
  }

  displayNumber() {
    console.log('123');
  }

}

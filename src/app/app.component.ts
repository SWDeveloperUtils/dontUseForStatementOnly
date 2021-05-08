import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'arrayUtils';

  myFruits = [
    { id: 1, fruit: 'Banana', weight: 50, weightPeeled: 43 },
    { id: 2, fruit: 'Orange', weight: 55, weightPeeled: 45 },
    { id: 5, fruit: 'Apple', weight: 60, weightPeeled: 58 },
    { id: 17, fruit: 'Mango', weight: 100, weightPeeled: 90 },
    { id: 39, fruit: 'Kiwi', weight: 40, weightPeeled: 38 }
  ];

  fruitsMap: number[] = [];
  fruitsMapArrow: number[] = [];
  totalFruitsWeight: number = 0;
  totalFruitsWeightArrow: number = 0;
  heaviestFruit: {} = {};
  moreThan60g: {} = {};
  peelWeight: number = 0;
  constructor() {

  }

  ngOnInit() {
    this.fruitsMap = this.myFruits.map(function (fruit) {
      return fruit.id
    });
    this.fruitsMapArrow = this.myFruits.map(fruit => fruit.id);

    this.totalFruitsWeight = this.myFruits.reduce(function (accumulator, fruit) {
      return accumulator + fruit.weight;
    }, 0);
    this.totalFruitsWeightArrow = this.myFruits.reduce((acc, fruit) => acc + fruit.weight, 0);
    this.heaviestFruit = this.myFruits.reduce(function (heaviest, fruit) {
      return (fruit.weight || 0) < fruit.weight ? heaviest : fruit;
    }, {});

    this.moreThan60g = this.myFruits.filter(function (fruit) {
      return fruit.weight >= 60;
    });
    this.peelWeight = this.myFruits.filter(function (fruit) { return fruit.id % 2 != 0; })
      .map(fruit => fruit.weight - fruit.weightPeeled)
      .reduce(function (total, peel) { return total + peel }, 0);
  }


}

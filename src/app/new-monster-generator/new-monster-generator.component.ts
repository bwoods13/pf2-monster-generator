import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-monster-generator',
  templateUrl: './new-monster-generator.component.html',
  styleUrls: ['./new-monster-generator.component.css']
})

export class NewMonsterGeneratorComponent implements OnInit {

  levels: any = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  abilityMods: any = [['n/a',  '+3', '+2', '+0'], // Level -1
                      ['n/a',  '+3', '+2', '+0'], // Level 0
                      [ '+5',  '+4', '+3', '+1'], // Level 1
                      [ '+5',  '+4', '+3', '+1'], // Level 2
                      [ '+5',  '+4', '+3', '+1'], // Level 3
                      [ '+6',  '+5', '+3', '+2'], // Level 4
                      [ '+6',  '+5', '+4', '+2'], // Level 5
                      [ '+7',  '+5', '+4', '+2'], // Level 6
                      [ '+7',  '+6', '+4', '+2'], // Level 7
                      [ '+7',  '+6', '+4', '+3'], // Level 8
                      [ '+7',  '+6', '+4', '+3'], // Level 9
                      [ '+8',  '+7', '+5', '+3'], // Level 10
                      [ '+8',  '+7', '+5', '+3'], // Level 11
                      [ '+8',  '+7', '+5', '+4'], // Level 12
                      [ '+9',  '+8', '+5', '+4'], // Level 13
                      [ '+9',  '+8', '+5', '+4'], // Level 14
                      [ '+9',  '+8', '+6', '+4'], // Level 15
                      ['+10',  '+9', '+6', '+5'], // Level 16
                      ['+10',  '+9', '+6', '+5'], // Level 17
                      ['+10',  '+9', '+6', '+5'], // Level 18
                      ['+11', '+10', '+6', '+5'], // Level 19
                      ['+11', '+10', '+7', '+6'], // Level 20
                      ['+11', '+10', '+7', '+6'], // Level 21
                      ['+11', '+10', '+8', '+6'], // Level 22
                      ['+11', '+10', '+8', '+6'], // Level 23
                      ['+13', '+12', '+9', '+7']];  // Level 24

  public name = 'Game Master';
  public selectedLevel = -1;
  public selectedLevelOffset = this.selectedLevel + 2;

  constructor() {}

  changeLevel(e) {
    this.selectedLevel = e.target.value;
    this.selectedLevelOffset = +e.target.value + +1;
  }

  ngOnInit() {
  }

}

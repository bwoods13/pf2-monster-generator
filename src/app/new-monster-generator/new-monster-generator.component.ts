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
  perceptionMods: any = [ [ '+9',  '+8',  '+5',  '+2',  '+0'], // Level -1
                          ['+10',  '+9',  '+6',  '+3',  '+1'], // Level 0
                          ['+11', '+10',  '+7',  '+4',  '+2'], // Level 1
                          ['+12', '+11',  '+8',  '+5',  '+3'], // Level 2
                          ['+14', '+12',  '+9',  '+6',  '+4'], // Level 3
                          ['+15', '+14', '+11',  '+8',  '+6'], // Level 4
                          ['+17', '+15', '+12',  '+9',  '+7'], // Level 5
                          ['+18', '+17', '+14', '+11',  '+8'], // Level 6
                          ['+20', '+18', '+15', '+12', '+10'], // Level 7
                          ['+21', '+19', '+16', '+13', '+11'], // Level 8
                          ['+23', '+21', '+18', '+15', '+12'], // Level 9
                          ['+24', '+22', '+19', '+16', '+14'], // Level 10
                          ['+26', '+24', '+21', '+18', '+15'], // Level 11
                          ['+27', '+25', '+22', '+19', '+16'], // Level 12
                          ['+29', '+26', '+23', '+20', '+18'], // Level 13
                          ['+30', '+28', '+25', '+22', '+19'], // Level 14
                          ['+32', '+29', '+26', '+23', '+20'], // Level 15
                          ['+33', '+30', '+28', '+25', '+22'], // Level 16
                          ['+35', '+32', '+29', '+26', '+23'], // Level 17
                          ['+36', '+33', '+30', '+27', '+24'], // Level 18
                          ['+38', '+35', '+32', '+29', '+26'], // Level 19
                          ['+39', '+36', '+33', '+30', '+27'], // Level 20
                          ['+41', '+38', '+35', '+32', '+28'], // Level 21
                          ['+43', '+39', '+36', '+33', '+30'], // Level 22
                          ['+44', '+40', '+37', '+34', '+31'], // Level 23
                          ['+46', '+42', '+38', '+36', '+32']]; // Level 24
  skillMods: any = 	[ [ '+8',  '+5',	 '+4',	  '+2 to +1', '0'], // Level -1
                      [ '+9',	 '+6',	 '+5',	  '+3 to +2', '0'], // Level 0
                      ['+10',	 '+7',	 '+6',	  '+4 to +3', '0'], // Level 1
                      ['+11',	 '+8',	 '+7',	  '+5 to +4', '0'], // Level 2
                      ['+13',	'+10',	 '+9',	  '+7 to +5', '0'], // Level 3
                      ['+15',	'+12',	'+10',	  '+8 to +7', '0'], // Level 4
                      ['+16',	'+13',	'+12',	 '+10 to +8', '0'], // Level 5
                      ['+18',	'+15',	'+13',	 '+11 to +9', '0'], // Level 6
                      ['+20',	'+17',	'+15',	'+13 to +11', '0'], // Level 7
                      ['+21',	'+18',	'+16',	'+14 to +12', '0'], // Level 8
                      ['+23',	'+20',	'+18',	'+16 to +13', '0'], // Level 9
                      ['+25',	'+22',	'+19',	'+17 to +15', '0'], // Level 10
                      ['+26',	'+23',	'+21',	'+19 to +16', '0'], // Level 11
                      ['+28',	'+25',	'+22',	'+20 to +17', '0'], // Level 12
                      ['+30',	'+27',	'+24',	'+22 to +19', '0'], // Level 13
                      ['+31',	'+28',	'+25',	'+23 to +20', '0'], // Level 14
                      ['+33',	'+30',	'+27',	'+25 to +21', '0'], // Level 15
                      ['+35',	'+32',	'+28',	'+26 to +23', '0'], // Level 16
                      ['+36',	'+33',	'+30',	'+28 to +24', '0'], // Level 17
                      ['+38',	'+35',	'+31',	'+29 to +25', '0'], // Level 18
                      ['+40',	'+37',	'+33',	'+31 to +27', '0'], // Level 19
                      ['+41',	'+38',	'+34', 	'+32 to +28', '0'], // Level 20
                      ['+43',	'+40',	'+36',	'+34 to +29', '0'], // Level 21
                      ['+45',	'+42',	'+37',	'+35 to +31', '0'], // Level 22
                      ['+46',	'+43',	'+38',	'+36 to +32', '0'], // Level 23
                      ['+48',	'+45',	'+40',	'+38 to +33', '0']]; // Level 24
  safeItems: any =  [ [ '0' ], // Level -1
                      [ '0' ], // Level 0
                      [ '0' ], // Level 1
                      [ '0' ], // Level 2
                      [ '0' ], // Level 3
                      [ '1' ], // Level 4
                      [ '1' ], // Level 5
                      [ '2' ], // Level 6
                      [ '3' ], // Level 7
                      [ '4' ], // Level 8
                      [ '5' ], // Level 9
                      [ '6' ], // Level 10
                      [ '7' ], // Level 11
                      [ '8' ], // Level 12
                      [ '9' ], // Level 13
                      [ '10' ], // Level 14
                      [ '11' ], // Level 15
                      [ '12' ], // Level 16
                      [ '13' ], // Level 17
                      [ '14' ], // Level 18
                      [ '15' ], // Level 19
                      [ '16' ], // Level 20
                      [ '17' ], // Level 21
                      [ '18' ], // Level 22
                      [ '19' ], // Level 23
                      [ '20' ]]; // Level 24
  ac: any =  [ [ '18', '15', '14', '12'], // Level -1
                [ '19', '16', '15', '13'], // Level 0
                [ '19', '16', '15', '13'], // Level 1
                [ '21', '18', '17', '15'], // Level 2
                [ '22', '19', '18', '16'], // Level 3
                [ '24', '21', '20', '18'], // Level 4
                [ '25', '22', '21', '19'], // Level 5
                [ '27', '24', '23', '21'], // Level 6
                [ '28', '25', '24', '22'], // Level 7
                [ '30', '27', '26', '24'], // Level 8
                [ '31', '28', '27', '25'], // Level 9
                [ '33', '30', '29', '27'], // Level 10
                [ '34', '31', '30', '28'], // Level 11
                [ '36', '33', '32', '30'], // Level 12
                [ '37', '34', '33', '31'], // Level 13
                [ '39', '36', '35', '33'], // Level 14
                [ '40', '37', '36', '34'], // Level 15
                [ '42', '39', '38', '36'], // Level 16
                [ '43', '40', '39', '37'], // Level 17
                [ '45', '42', '41', '39'], // Level 18
                [ '46', '43', '42', '40'], // Level 19
                [ '48', '45', '44', '42'], // Level 20
                [ '49', '46', '45', '43'], // Level 21
                [ '51', '48', '47', '45'], // Level 22
                [ '52', '49', '48', '46'], // Level 23
                [ '54', '51', '50', '48']]; // Level 24
  hp: any =  [ [       '9',     '8-7',     '6-5' ], // Level -1
                [   '20-17',   '16-14',   '13-11' ], // Level 0
                [   '26-24',   '21-19',   '16-14' ], // Level 1
                [   '40-36',   '32-28',   '25-21' ], // Level 2
                [   '59-53',   '48-42',   '37-31' ], // Level 3
                [   '78-72',   '63-57',   '48-42' ], // Level 4
                [   '97-91',   '78-72',   '59-53' ], // Level 5
                [ '123-115',   '99-91',   '75-67' ], // Level 6
                [ '148-140', '119-111',   '90-82' ], // Level 7
                [ '173-165', '139-131',  '105-97' ], // Level 8
                [ '198–190', '159–151', '120–112' ], // Level 9
                [ '223–215', '179–171', '135–127' ], // Level 10
                [ '248–240', '199–191', '150–142' ], // Level 11
                [ '273–265', '219–211', '165–157' ], // Level 12
                [ '298–290', '239–231', '180–172' ], // Level 13
                [ '323–315', '259–251', '195–187' ], // Level 14
                [ '348–340', '279–271', '210–202' ], // Level 15
                [ '373–365', '299–291', '225–217' ], // Level 16
                [ '398–390', '319–311', '240–232' ], // Level 17
                [ '423–415', '339–331', '255–247' ], // Level 18
                [ '448–440', '359–351', '270–262' ], // Level 19
                [ '473–465', '379–371', '285–277' ], // Level 20
                [ '505–495', '405–395', '305–295' ], // Level 21
                [ '544–532', '436–424', '329–317' ], // Level 22
                [ '581–569', '466–454', '351–339' ], // Level 23
                [ '633–617', '508–492', '383–367' ]]; // Level 24
  savingThrows: any =  [ [  '+9',  '+8',  '+5',  '+2',  '+0' ], // Level -1
                          [ '+10',  '+9',  '+6',  '+3',  '+1' ], // Level 0
                          [ '+11', '+10',  '+7',  '+4',  '+2' ], // Level 1
                          [ '+12', '+11',  '+8',  '+5',  '+3' ], // Level 2
                          [ '+14', '+12',  '+9',  '+6',  '+4' ], // Level 3
                          [ '+15', '+14', '+11',  '+8',  '+6' ], // Level 4
                          [ '+17', '+15', '+12',  '+9',  '+7' ], // Level 5
                          [ '+18', '+17', '+14', '+11',  '+8' ], // Level 6
                          [ '+20', '+18', '+15', '+12', '+10' ], // Level 7
                          [ '+21', '+19', '+16', '+13', '+11' ], // Level 8
                          [ '+23', '+21', '+18', '+15', '+12' ], // Level 9
                          [ '+24', '+22', '+19', '+16', '+14' ], // Level 10
                          [ '+26', '+24', '+21', '+18', '+15' ], // Level 11
                          [ '+27', '+25', '+22', '+19', '+16' ], // Level 12
                          [ '+29', '+26', '+23', '+20', '+18' ], // Level 13
                          [ '+30', '+28', '+25', '+22', '+19' ], // Level 14
                          [ '+32', '+29', '+26', '+23', '+20' ], // Level 15
                          [ '+33', '+30', '+28', '+25', '+22' ], // Level 16
                          [ '+35', '+32', '+29', '+26', '+23' ], // Level 17
                          [ '+36', '+33', '+30', '+27', '+24' ], // Level 18
                          [ '+38', '+35', '+32', '+29', '+26' ], // Level 19
                          [ '+39', '+36', '+33', '+30', '+27' ], // Level 20
                          [ '+41', '+38', '+35', '+32', '+28' ], // Level 21
                          [ '+43', '+39', '+36', '+33', '+30' ], // Level 22
                          [ '+44', '+40', '+37', '+34', '+31' ], // Level 23
                          [ '+46', '+42', '+38', '+36', '+32' ]]; // Level 24
  resistWeak: any =  [ [   '1-1' ], // Level -1
                        [   '3-1' ], // Level 0
                        [   '3-2' ], // Level 1
                        [   '5-2' ], // Level 2
                        [   '6-3' ], // Level 3
                        [   '7-4' ], // Level 4
                        [   '8-4' ], // Level 5
                        [   '9-5' ], // Level 6
                        [  '10-5' ], // Level 7
                        [  '11-6' ], // Level 8
                        [  '12-6' ], // Level 9
                        [  '13-7' ], // Level 10
                        [  '14-7' ], // Level 11
                        [  '15-8' ], // Level 12
                        [  '16-8' ], // Level 13
                        [  '17-9' ], // Level 14
                        [  '18-9' ], // Level 15
                        [  '19-9' ], // Level 16
                        [ '19-10' ], // Level 17
                        [ '20-10' ], // Level 18
                        [ '21-11' ], // Level 19
                        [ '22-11' ], // Level 20
                        [ '23-12' ], // Level 21
                        [ '24-12' ], // Level 22
                        [ '25-13' ], // Level 23
                        [ '26-13' ]]; // Level 24
  stab: any =  [ [ '+10',  '+8',  '+6',  '+4' ], // Level -1
                  [ '+10',  '+8',  '+6',  '+4' ], // Level 0
                  [ '+11',  '+9',  '+7',  '+5' ], // Level 1
                  [ '+13', '+11',  '+9',  '+7' ], // Level 2
                  [ '+14', '+12', '+10',  '+8' ], // Level 3
                  [ '+16', '+14', '+12',  '+9' ], // Level 4
                  [ '+17', '+15', '+13', '+11' ], // Level 5
                  [ '+19', '+17', '+15', '+12' ], // Level 6
                  [ '+20', '+18', '+16', '+13' ], // Level 7
                  [ '+22', '+20', '+18', '+15' ], // Level 8
                  [ '+23', '+21', '+19', '+16' ], // Level 9
                  [ '+25', '+23', '+21', '+17' ], // Level 10
                  [ '+27', '+24', '+22', '+19' ], // Level 11
                  [ '+28', '+26', '+24', '+20' ], // Level 12
                  [ '+29', '+27', '+25', '+21' ], // Level 13
                  [ '+31', '+29', '+27', '+23' ], // Level 14
                  [ '+32', '+30', '+28', '+24' ], // Level 15
                  [ '+34', '+32', '+30', '+25' ], // Level 16
                  [ '+35', '+33', '+31', '+27' ], // Level 17
                  [ '+37', '+35', '+33', '+28' ], // Level 18
                  [ '+38', '+36', '+34', '+29' ], // Level 19
                  [ '+40', '+38', '+36', '+31' ], // Level 20
                  [ '+41', '+39', '+37', '+32' ], // Level 21
                  [ '+43', '+41', '+39', '+33' ], // Level 22
                  [ '+44', '+42', '+40', '+35' ], // Level 23
                  [ '+46', '+44', '+42', '+36' ]]; // Level 24
  strikeDamage: any = [  [    '1d6+1 (4)',    '1d4+1 (3)',      '1d4 (3)',     '1d4 (2)' ], // Level -1
                          [    '1d6+3 (6)',    '1d6+2 (5)',    '1d4+2 (4)',   '1d4+1 (3)' ], // Level 0
                          [    '1d8+4 (8)',    '1d6+3 (6)',    '1d6+2 (5)',   '1d4+2 (4)' ], // Level 1
                          [  '1d12+4 (11)',   '1d10+4 (9)',    '1d8+4 (8)',   '1d6+3 (6)' ], // Level 2
                          [  '1d12+8 (15)',  '1d10+6 (12)',   '1d8+6 (10)',   '1d6+5 (8)' ], // Level 3
                          [  '2d10+7 (18)',   '2d8+5 (14)',   '2d6+5 (12)',   '2d4+4 (9)' ], // Level 4
                          [  '2d12+7 (20)',   '2d8+7 (16)',   '2d6+6 (13)',  '2d4+6 (11)' ], // Level 5
                          [ '2d12+10 (23)',   '2d8+9 (18)',   '2d6+8 (15)',  '2d4+7 (12)' ], // Level 6
                          [ '2d12+12 (25)',  '2d10+9 (20)',   '2d8+8 (17)',  '2d6+6 (13)' ], // Level 7
                          [ '2d12+15 (28)', '2d10+11 (22)',   '2d8+9 (18)',  '2d6+8 (15)' ], // Level 8
                          [ '2d12+17 (30)', '2d10+13 (24)',  '2d8+11 (20)',  '2d6+9 (16)' ], // Level 9
                          [ '2d12+20 (33)', '2d12+13 (26)', '2d10+11 (22)', '2d6+10 (17)' ], // Level 10
                          [ '2d12+22 (35)', '2d12+15 (28)', '2d10+12 (23)', '2d8+10 (19)' ], // Level 11
                          [ '3d12+19 (38)', '3d10+14 (30)',  '3d8+12 (25)', '3d6+10 (20)' ], // Level 12
                          [ '3d12+21 (40)', '3d10+16 (32)',  '3d8+14 (27)', '3d6+11 (21)' ], // Level 13
                          [ '3d12+24 (43)', '3d10+18 (34)',  '3d8+15 (28)', '3d6+13 (23)' ], // Level 14
                          [ '3d12+26 (45)', '3d12+17 (36)', '3d10+14 (30)', '3d6+14 (24)' ], // Level 15
                          [ '3d12+29 (48)', '3d12+18 (37)', '3d10+15 (31)', '3d6+15 (25)' ], // Level 16
                          [ '3d12+31 (50)', '3d12+19 (38)', '3d10+16 (32)', '3d6+16 (26)' ], // Level 17
                          [ '3d12+34 (53)', '3d12+20 (40)', '3d10+17 (33)', '3d6+17 (27)' ], // Level 18
                          [ '4d12+29 (55)', '4d10+20 (42)',  '4d8+17 (35)', '4d6+14 (28)' ], // Level 19
                          [ '4d12+32 (58)', '4d10+22 (44)',  '4d8+19 (37)', '4d6+15 (29)' ], // Level 20
                          [ '4d12+34 (60)', '4d10+24 (46)',  '4d8+20 (38)', '4d6+17 (31)' ], // Level 21
                          [ '4d12+37 (63)', '4d10+26 (48)',  '4d8+22 (40)', '4d6+18 (32)' ], // Level 22
                          [ '4d12+39 (65)', '4d12+24 (50)', '4d10+20 (42)', '4d6+19 (33)' ], // Level 23
                          [ '4d12+42 (68)', '4d12+26 (52)', '4d10+22 (44)', '4d6+21 (35)' ]]; // Level 24
  spellDC: any = [ [ '19', '16', '13' ], // Level -1
                    [ '19', '16', '13' ], // Level 0
                    [ '20', '17', '14' ], // Level 1
                    [ '22', '18', '15' ], // Level 2
                    [ '23', '20', '17' ], // Level 3
                    [ '25', '21', '18' ], // Level 4
                    [ '26', '22', '19' ], // Level 5
                    [ '27', '24', '21' ], // Level 6
                    [ '29', '25', '22' ], // Level 7
                    [ '30', '26', '23' ], // Level 8
                    [ '32', '28', '25' ], // Level 9
                    [ '33', '29', '26' ], // Level 10
                    [ '34', '30', '27' ], // Level 11
                    [ '36', '32', '29' ], // Level 12
                    [ '37', '33', '30' ], // Level 13
                    [ '39', '34', '31' ], // Level 14
                    [ '40', '36', '33' ], // Level 15
                    [ '41', '37', '34' ], // Level 16
                    [ '43', '38', '35' ], // Level 17
                    [ '44', '40', '37' ], // Level 18
                    [ '46', '41', '38' ], // Level 19
                    [ '47', '42', '39' ], // Level 20
                    [ '48', '44', '41' ], // Level 21
                    [ '50', '45', '42' ], // Level 22
                    [ '51', '46', '43' ], // Level 23
                    [ '52', '48', '45' ]]; // Level 24
  spellAttackBonus: any = [  [ '+11',  '+8',  '+5' ], // Level -1
                              [ '+11',  '+8',  '+5' ], // Level 0
                              [ '+12',  '+9',  '+6' ], // Level 1
                              [ '+14', '+10',  '+7' ], // Level 2
                              [ '+15', '+12',  '+9' ], // Level 3
                              [ '+17', '+13', '+10' ], // Level 4
                              [ '+18', '+14', '+11' ], // Level 5
                              [ '+19', '+16', '+13' ], // Level 6
                              [ '+21', '+17', '+14' ], // Level 7
                              [ '+22', '+18', '+15' ], // Level 8
                              [ '+24', '+20', '+17' ], // Level 9
                              [ '+25', '+21', '+18' ], // Level 10
                              [ '+26', '+22', '+19' ], // Level 11
                              [ '+28', '+24', '+21' ], // Level 12
                              [ '+29', '+25', '+22' ], // Level 13
                              [ '+31', '+26', '+24' ], // Level 14
                              [ '+32', '+28', '+25' ], // Level 15
                              [ '+33', '+29', '+26' ], // Level 16
                              [ '+35', '+30', '+27' ], // Level 17
                              [ '+36', '+32', '+29' ], // Level 18
                              [ '+38', '+33', '+30' ], // Level 19
                              [ '+39', '+34', '+31' ], // Level 20
                              [ '+40', '+36', '+33' ], // Level 21
                              [ '+42', '+37', '+34' ], // Level 22
                              [ '+43', '+38', '+35' ], // Level 23
                              [ '+44', '+40', '+37' ]]; // Level 24


  public name = 'Game Master';
  public selectedLevel = -1;
  public selectedLevelOffset = this.selectedLevel + +1;
  public dispAbilityMods: [] = this.abilityMods[this.selectedLevelOffset];
  public dispPreceptionMods: [] = this.perceptionMods[this.selectedLevelOffset];
  public dispSkillMods: [] = this.skillMods[this.selectedLevelOffset];
  public dispSafeItems: string = this.safeItems[this.selectedLevelOffset];
  public dispAC: [] = this.ac[this.selectedLevelOffset];
  public dispHP: [] = this.hp[this.selectedLevelOffset];
  public dispSavingThrows: [] = this.savingThrows[this.selectedLevelOffset];
  public dispResistWeak: string = this.resistWeak[this.selectedLevelOffset];
  public dispSTAB: [] = this.stab[this.selectedLevelOffset];
  public dispStrikeDamage: [] = this.strikeDamage[this.selectedLevelOffset];
  public dispSpellDC: [] = this.spellDC[this.selectedLevelOffset];
  public dispSpellAttackBonus: [] = this.spellAttackBonus[this.selectedLevelOffset];

  constructor() {}

  changeLevel(e) {
    this.selectedLevel = e.target.value;
    this.selectedLevelOffset = +e.target.value + +1;
  }

  filterLevel(filterVal: any)  {
    this.changeLevel(filterVal);
    this.dispAbilityMods = this.abilityMods[this.selectedLevelOffset];
    this.dispPreceptionMods = this.perceptionMods[this.selectedLevelOffset];
    this.dispSkillMods = this.skillMods[this.selectedLevelOffset];
    this.dispSafeItems = this.safeItems[this.selectedLevelOffset];
    this.dispAC = this.ac[this.selectedLevelOffset];
    this.dispHP = this.hp[this.selectedLevelOffset];
    this.dispSavingThrows = this.savingThrows[this.selectedLevelOffset];
    this.dispResistWeak = this.resistWeak[this.selectedLevelOffset];
    this.dispSTAB = this.stab[this.selectedLevelOffset];
    this.dispStrikeDamage = this.strikeDamage[this.selectedLevelOffset];
    this.dispSpellDC = this.spellDC[this.selectedLevelOffset];
    this.dispSpellAttackBonus = this.spellAttackBonus[this.selectedLevelOffset];
  }

  ngOnInit() {
  }

}
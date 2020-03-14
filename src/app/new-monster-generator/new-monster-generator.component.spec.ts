import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMonsterGeneratorComponent } from './new-monster-generator.component';

describe('NewMonsterGeneratorComponent', () => {
  let component: NewMonsterGeneratorComponent;
  let fixture: ComponentFixture<NewMonsterGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMonsterGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMonsterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

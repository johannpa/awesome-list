import { Component, Input, OnChanges, EventEmitter, Output, SimpleChange } from '@angular/core';


@Component({
  selector: 'al-planning-workday-item',
  templateUrl: './planning-workday-item.component.html',
  styles: [
  ]
})
export class PlanningWorkdayItemComponent implements OnChanges {
  currentWorkday: any;
  // @Input() workday: any;
  // @Input() ('workday') currentWorkday: any;
  @Input() dueDate: string = "";
  @Input() doneTasks: number | string = "";
  @Input() remainingTasks: number | string = "";

  @Output() workdayRemoved = new EventEmitter<string>();

  @Input()
  set workday(workday: { dueDate?: any; }) {
    this.currentWorkday = workday || {};

    if('Lundi' === workday.dueDate) {
      this.currentWorkday.dueDate += ' (Aujourd\'hui)';
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      this.update(propName, changes[propName].currentValue);
    }
  }

  update(propName: any, propValue: any) {

    switch (propName) {
      case 'dueDate' : {
        if ( 'Lundi' === propValue) { this.dueDate += ' (Aujourd\'hui)'; }
        break;
      }
      case 'doneTasks': {
        if ( 0 === propValue) { this.doneTasks = 'Aucune tâche terminé.'; }
        break;
      }
      case 'remainingTasks': {
        if (0 === propValue) {
          this.remainingTasks = 'Journée de travail terminée !';
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  removeWorkday(dueDate: string) {
    this.workdayRemoved.emit(dueDate);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

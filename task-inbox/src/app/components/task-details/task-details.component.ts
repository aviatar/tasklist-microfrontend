import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserTask } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styles: [
  ]
})
export class TaskDetailsComponent implements OnInit, OnChanges {

  @Input() userTask!: UserTask;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  taskCompleted(event: CustomEvent) {
    console.log(event.detail);
  }

}

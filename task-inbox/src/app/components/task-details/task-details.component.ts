import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService, UserTask } from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styles: []
})
export class TaskDetailsComponent implements OnInit, OnChanges {

  userTask?: UserTask;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getSelectedTask().subscribe(task => this.userTask = task);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  taskCompleted(event: CustomEvent) {
    this.taskService.removeTask(this.userTask!.id);
  }

}

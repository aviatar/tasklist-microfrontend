import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService, UserTask } from '../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [`
    .list-group-item {
      cursor: pointer;

      &:hover {
        background: #efefef;
      }
    }
  `]
})
export class TaskListComponent implements OnInit {

  @Output() taskSelected = new EventEmitter<UserTask>();

  userTasks$: Observable<UserTask[]>;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.userTasks$ = this.taskService.getUserTasks();
  }

  selectTask(task: UserTask) {
    this.taskService.selectTask(task.id);
  }

}

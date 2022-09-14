import { Component, OnInit } from '@angular/core';
import { TaskService, UserTask } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  selectedTask?: UserTask;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getSelectedTask().subscribe(task => this.selectedTask = task);
  }

}

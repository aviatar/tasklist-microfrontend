import { Component } from '@angular/core';
import { UserTask } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  selectedTask?: UserTask;

  taskSelected(task: UserTask) {
    this.selectedTask = task;
  }

}

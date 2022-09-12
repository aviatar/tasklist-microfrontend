import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface UserTask {
  id: string;
  title: string;
  description: string;
  createDate: Date;
  tags: string[];
  componentData: {
    componentUrl: string;
    elementName: string;
    baseUrl: string;
  }
}

const TASKS: UserTask[] = [
  {
    id: '1',
    title: 'Order new coffee',
    description: 'Coffee of machine 4711 is almost empty.',
    createDate: new Date(Date.parse('2022-09-15T09:40:00Z')),
    tags: ['Coffee', '4711'],
    componentData: {
      componentUrl: 'http://localhost:4300/main.js',
      elementName: 'process-coffee-order-task',
      baseUrl: 'http://localhost:8080/api'
    }
  },
  {
    id: '2',
    title: 'Refill cookie box',
    description: 'Cookies in conference room ABC is empty and need to be refilled.',
    createDate: new Date(Date.parse('2022-09-16T09:40:00Z')),
    tags: ['Cookie', 'ABC'],
    componentData: {
      componentUrl: 'http://localhost:4400/main.js',
      elementName: 'process-cookie-refill-task',
      baseUrl: 'http://localhost:8090/api'
    }
  }
]

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

  userTasks: UserTask[] = TASKS;
  selectedUserTask?: UserTask;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTask(task: UserTask) {
    this.selectedUserTask = task;
    this.taskSelected.emit(task);
  }

}

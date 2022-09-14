import { Injectable } from '@angular/core';
import { filter, map, Observable, ReplaySubject, take, withLatestFrom } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks$ = new ReplaySubject<UserTask[]>(1);
  private selectedTask$ = new ReplaySubject<UserTask | undefined>(1);

  constructor() {
    this.tasks$.next(TASKS);
  }

  public getUserTasks(): Observable<UserTask[]> {
    return this.tasks$;
  }

  public selectTask(taskId: string) {
    this.tasks$.pipe(
      take(1),
      map(tasks => tasks.find(task => task.id === taskId)),
      filter(task => !!task)
    ).subscribe(task => this.selectedTask$.next(task!));
  }

  public getSelectedTask(): Observable<UserTask | undefined> {
    return this.selectedTask$;
  }

  public removeTask(taskId: string) {
    this.tasks$.pipe(
      take(1),
      map(tasks => tasks.filter(task => task.id != taskId)),
      withLatestFrom(this.selectedTask$)
    ).subscribe(([tasks, selectedTask]) => {
      this.tasks$.next(tasks);
      if (selectedTask?.id === taskId) {
        this.selectedTask$.next(undefined);
      }
    });
  }

}

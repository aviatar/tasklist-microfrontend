import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReorderTaskComponent } from './reorder-task/reorder-task.component';



@NgModule({
  declarations: [
    ReorderTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReorderTaskComponent
  ]
})
export class CoffeeUserTasksModule { }

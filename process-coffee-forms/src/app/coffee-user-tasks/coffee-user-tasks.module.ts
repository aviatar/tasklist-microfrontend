import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReorderTaskComponent } from './reorder-task/reorder-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReorderTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReorderTaskComponent
  ]
})
export class CoffeeUserTasksModule { }

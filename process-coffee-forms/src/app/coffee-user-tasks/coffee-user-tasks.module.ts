import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReorderTaskComponent } from './reorder-task/reorder-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ReorderTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  exports: [
    ReorderTaskComponent
  ]
})
export class CoffeeUserTasksModule { }

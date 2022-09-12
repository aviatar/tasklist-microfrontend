import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reorder-task',
  templateUrl: './reorder-task.component.html',
  styles: [`
    .form-group > label {
      font-weight: 500;
    }
  `]
})
export class ReorderTaskComponent implements OnInit {

  @Input() taskId!: string;
  @Input() engineUrl!: string;
  @Output() completed = new EventEmitter<string>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      beans: ['', Validators.required]
    });
  }

  submitForm() {
    console.log(`Submit form selection to backend and complete task`, this.form.getRawValue());
    this.completed.emit(`Selected beans ${this.form.get('beans')?.value}`)
  }

}

import { Component, EventEmitter, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input({required : true}) present !: boolean;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueData = '';

  closeAddTask(){
    this.close.emit();
  }

  // showRes(){
  //   console.log(this.enteredTitle() + this.enteredSummary() + this.enteredDueData());
  // }

  newTask = output<newTask>();

  onSubmit(){
    console.log("EMITTED");
    this.newTask.emit({
      "title" : this.enteredTitle,
      "summary" : this.enteredSummary,
      "dueDate" : this.enteredDueData

    });

    this.closeAddTask();
  }
}

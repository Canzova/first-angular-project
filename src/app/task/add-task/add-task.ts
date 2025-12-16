import { Component, EventEmitter, inject, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask, User } from '../task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input({required : true}) present !: boolean;
  @Output() close = new EventEmitter<void>();
  @Input({required : true}) user !: User;

  enteredTitle = '';
  enteredSummary = '';
  enteredDueData = '';

  closeAddTask(){
    this.close.emit();
  }

  // showRes(){
  //   console.log(this.enteredTitle() + this.enteredSummary() + this.enteredDueData());
  // }

  // newTask = output<newTask>();

  private taskService = inject(TaskService);

  onSubmit(){
    const newTask = {
      "title" : this.enteredTitle,
      "summary" : this.enteredSummary,
      "dueDate" : this.enteredDueData

    };

    this.taskService.addNewTask(newTask, this.user);

    this.closeAddTask();
  }
}

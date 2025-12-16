import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { type DummyTask } from './individual-task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-individual-task',
  imports: [Card, DatePipe],
  templateUrl: './individual-task.html',
  styleUrl: './individual-task.css',
})
export class IndividualTask {
  @Input({required : true}) task !: DummyTask;
  private taskService = inject(TaskService);

  // @Output() deletedTask = new EventEmitter<string>();
  // deletedTask = output<string>();

  ondeleteTask(){
    this.taskService.deleteTask(this.task.id);
  }

}

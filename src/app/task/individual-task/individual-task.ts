import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type DummyTask } from './individual-task.model';


@Component({
  selector: 'app-individual-task',
  imports: [],
  templateUrl: './individual-task.html',
  styleUrl: './individual-task.css',
})
export class IndividualTask {
  @Input({required : true}) task !: DummyTask;

  // @Output() deletedTask = new EventEmitter<string>();
  deletedTask = output<string>();

  ondeleteTask(){
    // console.log("Inside individual - task");
    return this.deletedTask.emit(this.task.id);
  }

}

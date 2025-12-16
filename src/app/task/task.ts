import { Component, input, Input } from '@angular/core';
import { IndividualTask } from './individual-task/individual-task';
import { AddTask } from './add-task/add-task';
import { type newTask, type User } from './task.model';
import { Card } from '../shared/card/card';
import { TaskService } from './tasks.service';

// import {NgIf} from '@angular/common'

// type User={
//   id : string,
//   name : string,
//   avatar : string
// }

@Component({
  selector: 'app-task',
  imports: [IndividualTask, AddTask, Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  // @Input({required : true}) user !: any;
  // @Input({required : true}) user : string | undefined;
  // @Input({required : true}) user ?: string;  This can be undefined

  // Defining the type of this user object
  // user = input.required<{
  //   id : string,
  //   name : string,
  //   avatar : string
  // }>();

  user = input.required<User>();
  isAddingTask = false;
  // private taskService : TaskService

  // // Depedency injection
  // constructor(taskService : TaskService){
  //   this.taskService = taskService;
  // }

  // This is same as creating a var and then assigning it value, as done above
  constructor(private taskService: TaskService) {}

  get filterDummyTask() {
    return this.taskService.filterDummyTask(this.user());
  }

  deleteTask(taskId: string) {
    // this.taskService.deleteTask(taskId);
 
  }

  onAddTask() {
    this.isAddingTask = !this.isAddingTask;
    
  }

  // addNewTask(task: newTask) {
  //   this.taskService.addNewTask(task, this.user());
  // }


}

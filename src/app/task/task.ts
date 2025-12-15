import { Component, input, Input } from '@angular/core';
import { IndividualTask } from "./individual-task/individual-task";
import { AddTask } from './add-task/add-task';
import { type newTask, type User } from './task.model';
import { type DummyTask } from './individual-task/individual-task.model';
// import {NgIf} from '@angular/common'

// type User={
//   id : string,
//   name : string,
//   avatar : string
// }



@Component({
  selector: 'app-task',
  imports: [IndividualTask, AddTask],
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


  dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]

  isAddingTask = false;

  get filterDummyTask(){
    return this.dummyTasks.filter((dummyTask)=> dummyTask.userId === this.user().id);
  }

  deleteTask(taskId : string){
    this.dummyTasks = this.dummyTasks.filter((t)=>t.id !== taskId);
    // console.log("Inside task");
  }

  onAddTask(){
    this.isAddingTask = !this.isAddingTask;
  }

  addNewTask(task : newTask){
    console.log("Received");

    this.dummyTasks.push({
      id : 't' + this.dummyTasks.length,
      userId : this.user().id,
      title : task.title,
      summary : task.summary,
      dueDate : task.dueDate

    });
  }
}

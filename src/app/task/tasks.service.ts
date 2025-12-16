import { User } from './task.model';
import { newTask } from './task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
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
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.dummyTasks = JSON.parse(tasks);
    }
  }

  filterDummyTask(user: User) {
    return this.dummyTasks.filter((dummyTask) => dummyTask.userId === user.id);
  }

  deleteTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((t) => t.id !== taskId);
    this.saveTasksOnLocalStorage();
  }

  addNewTask(task: newTask, user: User) {
    this.dummyTasks.push({
      id: 't' + Date.now(),
      userId: user.id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });

    this.saveTasksOnLocalStorage();
  }


  private saveTasksOnLocalStorage(){
   localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }
}

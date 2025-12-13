import { Component, Input } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  user = DUMMY_USERS
  selectedUser !: any;

  onSelectUser(id : string){
    this.selectedUser = this.user.find(u => u.id === id);
    // console.log(this.selectedUser);
  }

}

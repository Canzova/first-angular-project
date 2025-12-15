import { Component, Input } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';
import { Task } from './task/task';
// import { NgFor } from "@angular/common"
import {type Userinterface } from './app.model'
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  users = DUMMY_USERS
  selectedUser ?: Userinterface;
  tempUser ?: Userinterface;

  /*
    You can only use 'this' keyword inside a method, constructor or a lifecycle hook
 */
  // constructor(){
  //   this.selectedUser = this.users[0];
  // }

  onSelectUser(id : string){
    this.tempUser = this.users.find(u => u.id === id);
    if(this.tempUser != undefined) this.selectedUser = this.tempUser;
  }

}

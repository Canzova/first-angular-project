import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // No need of varibale type
  selectedUser = DUMMY_USERS[randomIndex]

  // Because this is a getter, I can simply add it as an attribute/property in to html file and not as a method
  get imagePath(){
    return '../../assets/users/' + this.selectedUser.avatar
  }

  // Methods which are ment for even binding typically starts with 'on'
  onSelectUser(){
    // console.log("Clicked!!");
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex]
  }
}

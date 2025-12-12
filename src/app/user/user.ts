import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex])

  // This computed method is used with singal, It gives the updated value with signal can use.
  // This is effecient way of updating the signal value
  // This below method will be called automatically when ever the value of signal changes
  imagePath = computed(()=> '../../assets/users/' + this.selectedUser().avatar)

  // Methods which are ment for even binding typically starts with 'on'
  onSelectUser(){
    // console.log("Clicked!!");
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex]
  }
}

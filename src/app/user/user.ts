import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // ! means that this varible will be initialized outside from this component
  //? ---> : string shows the type of this variable
  // {required : true} will help us in debugging. If we forgot to send it from template, file then because of this property we will see an error
  
  @Input({required : true}) avatar !: string;
  @Input({required : true}) name!: string;


  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  // Methods which are ment for even binding typically starts with 'on'
  onSelectUser() {
    console.log(this.avatar);
  }
}

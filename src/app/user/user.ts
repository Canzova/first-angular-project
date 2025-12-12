import { Component, computed, input, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // @Input({required : true}) avatar !: string;
  // @Input({required : true}) name!: string;

  // These are signal input. Simply signals which we are getting from input method
  // These are just read only signals. You can chnage their values.
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(()=>{
    return '../../assets/users/' + this.avatar();
  });


  // Methods which are ment for even binding typically starts with 'on'
  onSelectUser() {
    console.log(this.avatar);
  }
}

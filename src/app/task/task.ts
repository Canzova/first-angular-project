import { Component, input, Input } from '@angular/core';

// type User={
//   id : string,
//   name : string,
//   avatar : string
// }

interface User{
    id : string,
  name : string,
  avatar : string
}

@Component({
  selector: 'app-task',
  imports: [],
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

}

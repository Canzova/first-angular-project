import { Component, Output,Input, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required : true}) avatar !: string;
  @Input({required : true}) name!: string;

  // Input as a signal : Mordern way
  // This is an input as a signal
  id = input.required<string>()
  selected = input<boolean>(false);

  // Emitting data from child to parent using Output decorater
  // @Output() select = new EventEmitter<string>();

  // Using output method : Modern way
  // This is not signal.
  select = output<string>();

  get imagePath(){
    return "../../assets/users/" + this.avatar;
  }

  // Methods which are ment for even binding typically starts with 'on'
  onSelectUser() {
    this.select.emit(this.id());  // Signals are always used as a method
  }
}

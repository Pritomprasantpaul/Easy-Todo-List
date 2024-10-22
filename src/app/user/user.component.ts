import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected! : boolean;

  //Using Input Decorator with I caps
  // @Input({required: true}) avatar! : string;
  // @Input({required: true}) name! : string;
  // @Input({required: true}) id! : string;
  @Output() select = new EventEmitter<string>();
  //this does same as above @Output, but this is latest and is same as EventEmitter
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  //We can use Signal here too, by using input with i small
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  
}

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// export class UserComponent {
  //2, Using Signal from Ng-v16, Angular detect changes  
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //1,Using Zone.js, Angular checks for change
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  //2, Using Signal
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
// }

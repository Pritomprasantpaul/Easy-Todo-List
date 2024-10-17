import { Component, computed, input, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //Using Input Decorator with I caps
  @Input({required: true}) avatar! : string;
  @Input({required: true}) name! : string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  //We can use Signal here too, by using input with i small
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser() {}
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

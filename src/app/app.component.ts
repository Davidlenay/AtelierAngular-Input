import { Component } from '@angular/core';
import { ButtonConfiguration } from 'src/models/button.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'input_output';

  buttons: ButtonConfiguration[] = [];

  constructor() {
    this.buttons.push(new ButtonConfiguration('yellow', 'black', 'red', '5px'));
    this.buttons.push(new ButtonConfiguration('black', 'white', 'yellow'));
    this.buttons.push(new ButtonConfiguration('green', 'red'));
    this.buttons.push(new ButtonConfiguration('red', 'white', 'black'));
    this.buttons.push(new ButtonConfiguration('#ABC', '#333'));
  }
}
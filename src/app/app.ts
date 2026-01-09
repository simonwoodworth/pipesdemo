import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe],
  template: `
    <h1>Welcome to the Angular Application!</h1>
    <p>{{ message | uppercase }}</p>
  `,
})
export class App {
  message: string = 'Hello, Angular!';
}

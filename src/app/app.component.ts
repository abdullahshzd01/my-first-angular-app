import { Component } from '@angular/core';
import { MyService } from './service/service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>Hello World</h1>
  `,
})
export class AppComponent {
  title = 'my-first-angular-app';
  constructor(private myService: MyService) {
    this.myService.doSomething();
  }
}

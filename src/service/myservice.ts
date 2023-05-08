import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MyService {
  constructor() {
    
  }

  doSomething() {
    console.log('Doing something!');
  }
}

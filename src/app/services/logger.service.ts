import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class LoggerService {
  constructor() {}

  logIntoConsole(text: string) {
    console.log(text);
  }
}

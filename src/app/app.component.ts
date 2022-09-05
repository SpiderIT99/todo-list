import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = [{
    name: 'gym',
    deadline: '01-03-2022',
    done: true
  },
  {
    name: 'homework',
    deadline: '03-03-2022',
    done: false
  },
  {
    name: 'piano lessons',
    deadline: '07-03-2022',
    done: false
  }]
  // config: { [key: string]: string};
  config = {
    title: '',
    footer: '',
    date: ''
  };
  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© All rights reserved.',
        date: new Date().toDateString()
      };
    }, 500)
  }
}

import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Wpisz co bedziesz robil';
  taskDate = '';
  tasks: Task[] = [{
    name: 'gym',
    deadline: '01-03-2022',
    done: false
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

  config = {
    title: '',
    footer: '',
    date: ''
  };

  constructor() {
    this.config = {
      title: 'Lista zadań',
      footer: '© All rights reserved.',
      date: new Date().toDateString()
    };
  }

  cleanTask() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
  }

  delateTask(task: Task) {
    this.tasks = this.tasks.filter(ele => ele !== task);
  }
}

import { Component } from '@angular/core';
//import { Itask } from '../../interface/itask';
//import { Task } from '../../models/task';

interface Task {
  id: number;
  name: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

  taskName: string = '';
  tasks: Task[] = [];
  currentTaskId: number = 0;

  addTask() {
    if (this.taskName.trim() !== '') {
      this.tasks.push({
        id: this.currentTaskId++,
        name: this.taskName,
        isEditing: false
      });
      this.taskName = '';
    }
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task, newName: string) {
    if (newName.trim() !== '') {
      task.name = newName;
      task.isEditing = false;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}

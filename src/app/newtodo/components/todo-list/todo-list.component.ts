import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Itodo } from '../../interfaces/itodo';
import { TodoService } from '../../../cores/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}
  @Input() todos: Itodo[] = [];
  @Input() forTrash: boolean = false;


  getTodos(): Itodo[] {
    if (this.forTrash) {
      return this.todoService.getTrashTodos();
    }

    return this.todoService.getTodos();
  }
}

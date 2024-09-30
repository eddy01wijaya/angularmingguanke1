import { Component, Input } from '@angular/core';
import { Itodo } from '../../interfaces/itodo';
import { TodoService } from '../../../cores/services/todo.service';
import { MOCK_TODOS } from '../../../cores/mocks/todo.mock';

let MOCK_DATA = [
  {
    id: 1,
    task: 'Minum Kopi',
    isDone: true,
  },
  {
    id: 2,
    task: 'Meeting',
    isDone: false,
  },
  {
    id: 3,
    task: 'Makan Siang',
    isDone: false,
  },
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  
})
export class TodoComponent {
  isEdit: boolean = false;
  @Input()
  title: string = 'App Todo';

  @Input()
  forTrash: boolean = false;

  todos: Itodo[] = MOCK_DATA;

  constructor(private todoService: TodoService) {}

  getAll() {
    return this.todoService.getTodos();
  }

  add(todo: Itodo) {
    let payload: Itodo = { ...todo };
    payload.id = this.todos.length + 1;
    this.todos.push(payload);
  }

  remove(todos: Itodo[]) {
    this.todos = todos;
  }

  search(query: string) {
    let todosCopy: Itodo[] = [...this.todos];
    // let results = todosCopy.filter((value: Itodo) => value.task === query);
    let results = todosCopy.filter((value: Itodo) =>
      value.task.includes(query)
    );

    if (results.length > 0) {
      this.todos = results;
    }

    if (query === '') {
      this.todos = MOCK_DATA;
    }
  }
}

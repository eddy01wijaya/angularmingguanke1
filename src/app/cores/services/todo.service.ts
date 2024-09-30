import { Itodo } from "../../newtodo/interfaces/itodo";
import { MOCK_TODOS } from "../mocks/todo.mock";

export class TodoService {
    private todos: Itodo[] = MOCK_TODOS;
    private trashTodos: Itodo[] = [];
  
    getTodos(): Itodo[] {
      return this.todos;
    }
  
    getTrashTodos(): Itodo[] {
      return this.trashTodos;
    }
  
    addTodo(todo: Itodo): void {
      let payload: Itodo = { ...todo };
      payload.id = this.todos.length + 1;
      this.todos.push(payload);
    }
  
    removeTodo(id: number): void {
      let payload: Itodo[] = this.todos.filter((value: Itodo) => value.id !== id);
      this.todos = payload;
    }
  
    searchTodo(query: string) {
      let todosCopy: Itodo[] = [...this.todos];
      let results = todosCopy.filter((value: Itodo) =>
        value.task.includes(query)
      );
  
      if (results.length > 0) {
        this.todos = results;
      }
  
      if (query === '') {
        this.todos = MOCK_TODOS;
      }
    }
  
    moveToTrash(todo: Itodo) {
      this.trashTodos.push(todo);
    }
  
    restore(id: number) {
      let todoRestore: Itodo | undefined = this.trashTodos.find(
        (value: Itodo) => value.id === id
      );
      if (todoRestore) {
        this.todos.push(todoRestore);
  
        let payload: Itodo[] = this.trashTodos.filter(
          (value: Itodo) => value.id !== id
        );
        this.trashTodos = payload;
      }
    }
  
    getTotalTrash(): number {
      return this.trashTodos.length;
    }
  
    getTotalTodos(): number {
      return this.todos.length;
    }
}
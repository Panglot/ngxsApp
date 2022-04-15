import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodoState> {
  public selectTodoGeneratedList$ = this.select('todoGeneratedList');
  public selectTodoSelectedList$ = this.select(state => state.todoSelectedList);

  constructor(protected store: TodoStore) {
    super(store);
  }
}

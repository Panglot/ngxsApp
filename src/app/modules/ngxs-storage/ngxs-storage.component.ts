import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import * as TodoActions from './store/todo-store.actions';

@Component({
  selector: 'app-ngxs-storage',
  templateUrl: './ngxs-storage.component.html'
})
export class NgxsStorageComponent {
  @Select(state => state.todo) todo$;
  // @Select() todo$;
  @Select(state => state.todo.todoGeneratedList) todoGeneratedList$;
  @Select(state => state.todo.todoSelectedList) todoSelectedList$;

  constructor(private store: Store) { }

  public generateTodo(): void {
    this.store.dispatch([new TodoActions.Generate()]);
  }

  public clearGenerated(): void {
    this.store.dispatch([new TodoActions.ClearGenerated()]);
  }
}

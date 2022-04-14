import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import * as TodoActions from '../store/todo-store.actions';

@Component({
  selector: 'app-todo-listing-ngxs',
  templateUrl: './todo-listing-ngxs.component.html'
})
export class TodoListingNgxsComponent implements OnInit {
  @Input() todoType = '';
  // @Input() todoList = [];

  public todoList$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
      switch (this.todoType) {
        case 'generated':
          this.todoList$ = this.store.select(state => state.todo.todoGeneratedList);
          break;
        case 'selected':
          this.todoList$ = this.store.select(state => state.todo.todoSelectedList);
          break;
      }
  }


  public select(key: string): void {
    this.store.dispatch([new TodoActions.Select(key)]);
  }

  public unselect(key: string): void {
    this.store.dispatch([new TodoActions.Unselect(key)]);
  }

  public complete(key: string): void {
    this.store.dispatch([new TodoActions.Complete(key)]);
  }

  public removeSelected(key: string): void {
    this.store.dispatch([new TodoActions.RemoveSelected(key)]);
  }
}

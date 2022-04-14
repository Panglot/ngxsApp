import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface TodoState {
  todoGeneratedList: any[];
  todoSelectedList: any[];
}

export function createInitialState(): TodoState {
  return {
    todoGeneratedList: [],
    todoSelectedList: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todo' })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super(createInitialState());
  }
}

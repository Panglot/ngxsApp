import { Injectable } from '@angular/core';
import { EntityStore, Store, StoreConfig } from '@datorama/akita';

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
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super(createInitialState());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arrayAdd } from '@datorama/akita';
import { TodoStore } from './todo.store';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://www.boredapi.com/api/activity';

  constructor(private todoStore: TodoStore, private httpClient: HttpClient) {}

  generate(): void {
    this.httpClient.get(this.apiUrl).toPromise()
    .then((response) => {
      this.todoStore.update(({ todoGeneratedList }) => ({
        todoGeneratedList: arrayAdd(todoGeneratedList, response)
      }));
    });
  }

  clearGenerated(): void {
    this.todoStore.update(store => {
      store.todoGeneratedList = [];
      return { ...store }
    })
  }

  select(key: string): void {
    const todoIndex = this.todoStore.getValue().todoGeneratedList.findIndex((todo: any) => todo.key === key);
    const todo = this.todoStore.getValue().todoGeneratedList[todoIndex];

    this.todoStore.update(({ todoSelectedList }) => ({
      todoSelectedList: arrayAdd(todoSelectedList, todo)
    }))

    this.todoStore.update(store => {
      store.todoGeneratedList.splice(todoIndex,1);
      return { ...store }
    })
  }

  unselect(key: string): void {
    const todoIndex = this.todoStore.getValue().todoSelectedList.findIndex((todo: any) => todo.key === key);
    const todo = this.todoStore.getValue().todoSelectedList[todoIndex];

    this.todoStore.update(({ todoGeneratedList }) => ({
      todoGeneratedList: arrayAdd(todoGeneratedList, todo)
    }))

    this.todoStore.update(store => {
      store.todoSelectedList.splice(todoIndex,1);
      return { ...store }
    })
  }

  complete(key: string): void {
    const todoForCompletion = this.todoStore.getValue().todoSelectedList.find((todo: any) => todo.key === key);
    const index = this.todoStore.getValue().todoSelectedList.indexOf(todoForCompletion);

    let complete = this.todoStore.getValue().todoSelectedList[index].isComplete;
    complete = complete === undefined ? complete = true : complete = !complete;

    this.todoStore.update(store => {
      store.todoSelectedList[index].isComplete = complete;
      return { ...store }
    })
  }

  removeSelected(key: string): void {
    this.todoStore.update(store => {
      store.todoSelectedList.splice(this.todoStore.getValue().todoSelectedList
        .findIndex((todo: any) => todo.key === key),1);
      return { ...store }
    })
  }
}


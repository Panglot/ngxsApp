import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoStore } from './todo.store';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://www.boredapi.com/api/activity';

  constructor(private todoStore: TodoStore, private httpClient: HttpClient) {}

  generate(): void {
    console.log(this.todoStore);
    this.httpClient.get(this.apiUrl).toPromise()
    .then((response) => {
      this.todoStore.update(state => {
        state.todoGeneratedList = [...state.todoGeneratedList, response];
      });
    });

    console.log(this.todoStore);
  }
}

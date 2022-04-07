import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ITodoState, initialTodoState } from './ITodoStore';
import { StateService } from './StateService.service';

@Injectable()
export class TodoStoreService extends StateService<ITodoState> {
  private apiUrl = 'https://www.boredapi.com/api/activity';

  public todos$: Observable<any[]> = this.select(state => state.todoList);
  public generatedTodos$: Observable<any[]> = this.select(state => state.todoGeneratedList);

  constructor(
    private httpClient: HttpClient
  ) {
    super(initialTodoState);
  }

  public generateTodo(): void {
    this.httpClient.get(this.apiUrl).toPromise()
    .then((response) => {
      this.setState({todoGeneratedList: [...this.state.todoGeneratedList, response]});
    });
  }
}

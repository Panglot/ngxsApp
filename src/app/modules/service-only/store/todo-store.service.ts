import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ITodoState, initialTodoState } from './ITodoStore';
import { StateService } from './StateService.service';

@Injectable()
export class TodoStoreService extends StateService<ITodoState> {
  private apiUrl = 'https://www.boredapi.com/api/activity';

  public selectedTodos$: Observable<any[]> = this.select(state => state.todoSelectedList);
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
      console.log(response);
      
    });
  }

  public clearGenerated(): void {
    this.setState({todoGeneratedList: []});
  }

  public selectTodo(todoKey: any): void {
    let todoIndex = this.state.todoGeneratedList.findIndex((todo: any) => todo.key === todoKey);

    this.setState({todoSelectedList: [
      ...this.state.todoSelectedList, 
      {...this.state.todoGeneratedList[todoIndex]}
    ]})

    this.setState({todoGeneratedList: this.state.todoGeneratedList.filter(todo => todo.key !== todoKey)});
  }


  public unselectTodo(todoKey: any): void {
    let todoIndex = this.state.todoSelectedList.findIndex((todo: any) => todo.key === todoKey);

    this.setState({todoGeneratedList: [
      ...this.state.todoGeneratedList, 
      {...this.state.todoSelectedList[todoIndex]}
    ]})

    this.setState({todoSelectedList: this.state.todoSelectedList.filter(todo => todo.key !== todoKey)});
  }

  public removeSelected(todoKey: any): void {
    this.setState({todoSelectedList: this.state.todoSelectedList.filter(todo => todo.key !== todoKey)});
  }
  
  public completeTodo(todoKey: any): void {
    let todo = this.state.todoSelectedList.find(todo => todo.key === todoKey);
    let index = this.state.todoSelectedList.indexOf(todo);
    
    let complete = this.state.todoSelectedList[index].isCompleted;
    complete = complete === undefined ? complete = true : complete = !complete;

    this.state.todoSelectedList[index] = {
      ...todo,
      isCompleted: complete
    }
    this.setState({todoSelectedList: [
      ...this.state.todoSelectedList 
    ]})

    console.log(this.state);
    
  }
}

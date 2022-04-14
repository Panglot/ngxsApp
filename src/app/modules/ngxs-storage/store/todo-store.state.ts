import { State, Action, StateContext } from '@ngxs/store';
import * as ToDoActions from './todo-store.actions';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TodoStateModel {
  todoGeneratedList: any[];
  todoSelectedList: any[];
}


@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todoGeneratedList: [],
    todoSelectedList: []
  }
})
@Injectable()
export class TodoState {
  private apiUrl = 'https://www.boredapi.com/api/activity';

  constructor(private httpClient: HttpClient) {}

  @Action(ToDoActions.Generate)
  generate({ patchState, getState }: StateContext<TodoStateModel>): void {
    const todoGenerated = getState().todoGeneratedList;

    this.httpClient.get(this.apiUrl).toPromise()
    .then((response) => {
      patchState({ todoGeneratedList: [...todoGenerated, response] });
    });
  }

  @Action(ToDoActions.ClearGenerated)
  clear({ patchState }: StateContext<TodoStateModel>): void  {
    patchState({ todoGeneratedList: []});
  }

  @Action(ToDoActions.Select)
  select({ patchState, getState }: StateContext<TodoStateModel>, action: ToDoActions.Select): void  {
    const todoIndex = getState().todoGeneratedList.findIndex((todo: any) => todo.key === action.key);

    patchState({
      todoSelectedList: [
        ...getState().todoSelectedList,
        {...getState().todoGeneratedList[todoIndex]}
      ]
    });

    patchState({
      todoGeneratedList: [...getState().todoGeneratedList.filter(todo => todo.key !== action.key)]
    });
  }

  @Action(ToDoActions.Unselect)
  unselect({ patchState, getState }: StateContext<TodoStateModel>, action: ToDoActions.Unselect): void  {
    const todoIndex = getState().todoSelectedList.findIndex((todo: any) => todo.key === action.key);

    patchState({
      todoGeneratedList: [
        ...getState().todoGeneratedList,
        {...getState().todoSelectedList[todoIndex]}
      ]
    });

    patchState({
      todoSelectedList: [...getState().todoSelectedList.filter(todo => todo.key !== action.key)]
    });
  }

  @Action(ToDoActions.Complete)
  complete({ patchState, getState }: StateContext<TodoStateModel>, action: ToDoActions.Complete): void  {
    const todoForCompletion = getState().todoSelectedList.find((todo: any) => todo.key === action.key);
    const index = getState().todoSelectedList.indexOf(todoForCompletion);

    let complete = getState().todoSelectedList[index].isComplete;
    complete = complete === undefined ? complete = true : complete = !complete;

    getState().todoSelectedList[index] = {
      ...todoForCompletion,
      isComplete: complete
    };

    patchState({
      todoSelectedList: [
        ...getState().todoSelectedList
      ]
    });
  }

  @Action(ToDoActions.RemoveSelected)
  removeSelected({ patchState, getState }: StateContext<TodoStateModel>, action: ToDoActions.RemoveSelected): void  {
    patchState({
      todoSelectedList: [...getState().todoSelectedList.filter(todo => todo.key !== action.key)]
    });
  }
}

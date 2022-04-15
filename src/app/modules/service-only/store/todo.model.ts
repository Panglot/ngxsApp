export interface TodoStateModel {
  todoGeneratedList: any[];
  todoSelectedList: any[];
}

export const initialTodoState: TodoStateModel = {
  todoGeneratedList: [],
  todoSelectedList: []
};

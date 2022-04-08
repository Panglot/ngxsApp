export interface ITodoState {
  todoGeneratedList: any[];
  todoSelectedList: any[];
}

export const initialTodoState: ITodoState = {
  todoGeneratedList: [],
  todoSelectedList: []
};

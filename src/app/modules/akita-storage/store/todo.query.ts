import { Query } from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends Query<TodoState> {
  public todoGeneratedList$ = this.select('todoGeneratedList');
  public todoSelectedList$ = this.select(state => state.todoSelectedList);

  constructor(protected store: TodoStore) {
    super(store);
  }
}
